const ClothingItem = require('../models/ClothingItem')
const groq = require('../services/ai')
const { scoreOutfit } = require('../services/outfitScorer');

async function handleAiSuggestion(req, res) {
    try {
        const { top, bottom, shoes, accessory } = req.body

        const selectedItems = {
            top,
            bottom,
            shoes,
            accessory
        }
        console.log("Selected items:", {
            top: top?.id,
            bottom: bottom?.id,
            shoes: shoes?.id,
            accessory: accessory?.id
        })
        const missingSlots = []
        if (!top) missingSlots.push("top")
        if (!bottom) missingSlots.push("bottom")
        if (!shoes) missingSlots.push("shoes")
        if (!accessory) missingSlots.push("accessory")

        if (missingSlots.length === 0) {
            return res.status(400).json({ message: "All slots are already filled." })
        }

        const availableItems = await ClothingItem.find({
            category: { $in: missingSlots }
        })

        const grouped = {}
        missingSlots.forEach(slot => {
            grouped[slot] = availableItems
                .filter(item => item.category === slot)
                .map(item => ({
                    id: item.id,
                    name: item.name,
                    color: item.color,
                    style: item.style.join(', '),
                    occasion: item.occasion.join(', '),
                    season: item.season.join(', '),
                    formality: item.formality
                }))
        })

        const filledDescription = [
            top ? `Top: ${top.name}, Color: ${top.color}, Style: ${top.style?.join(', ')}, Occasion: ${top.occasion?.join(', ')}` : null,
            bottom ? `Bottom: ${bottom.name}, Color: ${bottom.color}, Style: ${bottom.style?.join(', ')}` : null,
            shoes ? `Shoes: ${shoes.name}, Color: ${shoes.color}` : null,
            accessory ? `Accessory: ${accessory.name}, Color: ${accessory.color}` : null,
        ].filter(Boolean).join('\n')

        const selectedReference = top || bottom || shoes || accessory;

        const styleOccasionPairs = [];

        if (selectedReference) {
            for (const style of selectedReference.style || []) {
                for (const occasion of selectedReference.occasion || []) {
                    styleOccasionPairs.push({
                        style,
                        occasion
                    });
                }
            }
        }

        console.log("Style × Occasion combinations:", styleOccasionPairs);

        const prompt = `
            You are a fashion outfit generator.

            SELECTED ITEMS:
            ${filledDescription}

            INTENT COMBINATIONS:
            ${JSON.stringify(styleOccasionPairs)}

            For EACH intent combination, create EXACTLY ONE complete outfit.

            Rules:
            1. Keep all selected items unchanged.
            2. Fill only the missing slots.
            3. Use ONLY item IDs from the wardrobe below.
            4. The outfit must match the specified style AND occasion.
            5. Do not mix or invent styles or occasions.
            6. Do not invent item IDs.
            7. Do not calculate scores.
            8. Do not explain anything.
            9. Return ONLY valid JSON.
            10. Return exactly one recommendation for each intent combination.

            Each Style × Occasion combination must produce a meaningfully different outfit from the other combinations.

            Do not reuse the same bottom + shoes + accessory combination for multiple
            Style × Occasion combinations unless the available wardrobe makes it unavoidable.

            The differences must be intentional:
            - feminine → prioritize feminine-looking pieces
            - minimal → prioritize simple, clean pieces
            - trendy → prioritize trend-forward pieces
            - vacation → prioritize vacation-appropriate pieces
            - party → prioritize party-appropriate pieces
            - date → prioritize date-appropriate pieces

            WARDROBE:
            ${JSON.stringify(grouped)}

            OUTPUT:
            {
            "recommendations": [
                {
                "bottom": "item_id",
                "shoes": "item_id",
                "accessory": "item_id",
                "style": "exact_style",
                "occasion": "exact_occasion"
                }
            ]
            }
            `
        const response = await groq.chat.completions.create({
            model: "qwen/qwen3.8-27b",

            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],

            temperature: 0.7,

            reasoning_effort: "none",

            max_completion_tokens: 4096,

            response_format: {
                type: "json_object"
            }
        });
        console.log("FULL AI RESPONSE:", JSON.stringify(response, null, 2));

        const rawText = response.choices?.[0]?.message?.content?.trim();

        console.log("RAW TEXT:", JSON.stringify(rawText));
        let suggestions
        try {
            suggestions = JSON.parse(rawText)
        } catch (err) {
            return res.status(500).json({ message: "AI returned an unexpected response. Please try again." })
        }

        const validPairs = new Set(
            styleOccasionPairs.map(
                pair => `${pair.style}::${pair.occasion}`
            )
        );

        const recommendations = [];
        const usedCombinations = new Set();

        for (const outfit of suggestions.recommendations) {

            const combinationKey = [
                outfit.bottom,
                outfit.shoes,
                outfit.accessory
            ].join("::");

            if (usedCombinations.has(combinationKey)) {
                console.log("Skipping duplicate outfit:", combinationKey);
                continue;
            }

            usedCombinations.add(combinationKey);
            
            const pairKey = `${outfit.style}::${outfit.occasion}`;

            if (!validPairs.has(pairKey)) {
                console.log(
                    "Skipping invalid Style × Occasion:",
                    outfit.style,
                    outfit.occasion
                );
                continue;
            }

            const completeOutfit = {};

            for (const slot of ["top", "bottom", "shoes", "accessory"]) {
                if (selectedItems[slot]) {
                    completeOutfit[slot] = selectedItems[slot];
                }
            }

            for (const slot of missingSlots) {

                const itemId = outfit[slot];

                if (!itemId) {
                    continue;
                }

                const item = await ClothingItem.findOne({ id: itemId });

                if (!item) {
                    continue;
                }

                completeOutfit[slot] = item;
            }

            const isComplete =
                completeOutfit.top &&
                completeOutfit.bottom &&
                completeOutfit.shoes &&
                completeOutfit.accessory;

            if (isComplete) {
                const recommendedOutfit = {
                    style: outfit.style,
                    occasion: outfit.occasion,
                    outfit: completeOutfit
                };
                const score = scoreOutfit(recommendedOutfit);

                recommendations.push({
                    ...recommendedOutfit,
                    score
                });
            }
        }

        recommendations.sort((a, b) => b.score - a.score);
        console.log(
            "Final recommendations:",
            recommendations.map(rec => ({
                style: rec.style,
                occasion: rec.occasion,
                top: rec.outfit.top?.id,
                bottom: rec.outfit.bottom?.id,
                shoes: rec.outfit.shoes?.id,
                accessory: rec.outfit.accessory?.id
            }))
        )

        const topRecommendations = recommendations.slice(0, 3);


        return res.status(200).json(topRecommendations)

    } catch (err) {
        if (err.status === 429) {
            return res.status(429).json({
                message: "AI Stylist is temporarily busy. Please try again in a few seconds."
            })
        }
        console.log(err.message)

    return res.status(500).json({
        message: err.message,
        status: err.status,
        response: err.response?.data
    });
    }
}

module.exports = { handleAiSuggestion }