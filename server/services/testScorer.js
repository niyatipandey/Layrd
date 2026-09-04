const { scoreOutfit,scoreStyle,scoreColor,scoreFit,scoreFormality,scoreMaterial,scoreOccasion,scoreSeason } = require("./outfitScorer");

const recommendation = {
    style: "minimal",
    occasion: "college",
    season: "summer",

    outfit: {
        top: {
            color: "white",
            styleScores: { minimal: 3 },
            occasionScores: { college: 3 },
            seasonScores: { summer: 5 },
            formality: 5,
            fitScore: 5,
            materialScore: 5
        },

        bottom: {
            color: "blue",
            styleScores: { minimal: 3 },
            occasionScores: { college: 3 },
            seasonScores: { summer: 5 },
            formality: 5,
            fitScore: 5,
            materialScore: 5
        },

        shoes: {
            color: "white",
            styleScores: { minimal: 3 },
            occasionScores: { college: 3 },
            seasonScores: { summer: 5 },
            formality: 5,
            fitScore: 5,
            materialScore: 5
        },

        accessory: {
            color: "gold",
            styleScores: { minimal: 3 },
            occasionScores: { college: 3 },
            formality: 5,
            fitScore: 5
        }
    }
};

console.log("Style:", scoreStyle(recommendation));
console.log("Occasion:", scoreOccasion(recommendation));
console.log("Color:", scoreColor(recommendation));
console.log("Formality:", scoreFormality(recommendation));
console.log("Fit:", scoreFit(recommendation));
console.log("Material:", scoreMaterial(recommendation));
console.log("Season:", scoreSeason(recommendation));
console.log("TOTAL:", scoreOutfit(recommendation));