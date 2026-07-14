const ai = require('../services/gemini')
const ClothingItem = require('../models/ClothingItem')

async function handleAiSuggestion(req,res) {
    try{
        const missingCategories =[];
        if(!req.body.top){
            missingCategories.push("top");
        }
        if(!req.body.bottom){
            missingCategories.push("bottom");
        }
        if(!req.body.shoes){
            missingCategories.push("shoes");
        }
        if(!req.body.accessory){
            missingCategories.push("accessory");
        }

        const availableItems = await ClothingItem.find({
            category: { $in: missingCategories}
        })

        const wardrobeText = availableItems.map((item)=>`
        Name: ${item.name}
        Category: ${item.category}
        Color: ${item.color}
        Style: ${item.style}
        Season: ${item.season}
        Occasion: ${item.occasion}
        `).join("\n")

        const prompt = `
            You are an expert fashion stylist.

            The user has already selected:

            Top: ${req.body.top || "None"}
            Bottom: ${req.body.bottom || "None"}
            Shoes: ${req.body.shoes || "None"}
            Accessory: ${req.body.accessory || "None"}

            The following clothing items are available in the wardrobe:

            ${wardrobeText}

            IMPORTANT RULES:

            1. Recommend ONLY from the available wardrobe above.
            2. Never invent clothing items.
            3. Recommend ONLY for missing slots.
            4. Return ONLY valid JSON.
            5. Do not include markdown or explanations.

            Return in this format:

            {
            "top": null,
            "bottom": null,
            "shoes": "",
            "accessory": ""
            }
            `;
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents:prompt,
        });
        let suggestions;
        try{
            suggestions = JSON.parse(response.text)
        }catch(err){
            return res.status(500).json({message: "Invalif JSON returned by AI"})
        }
        const recommendedItems = {};
        if(suggestions.shoes){
            recommendedItems.shoes = await ClothingItem.findOne({
                name: suggestions.shoes
            })
        }
        if(suggestions.accessory){
            recommendedItems.accessory = await ClothingItem.findOne({
                name: suggestions.accessory
            });
        }
        return res.json(recommendedItems)
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:err.message
        })
    }
}

module.exports = {
    handleAiSuggestion
}