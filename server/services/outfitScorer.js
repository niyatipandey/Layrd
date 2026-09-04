const { colorCompatibility } = require('./colorCompatibility');


function scoreStyle(recommendation) {
    const { style, outfit } = recommendation;

    const topScore =
        (outfit.top.styleScores?.[style] ?? 2) / 5 * 12;

    const bottomScore =
        (outfit.bottom.styleScores?.[style] ?? 2) / 5 * 9;

    const shoesScore =
        (outfit.shoes.styleScores?.[style] ?? 2) / 5 * 6;

    const accessoryScore =
        (outfit.accessory.styleScores?.[style] ?? 2) / 5 * 3;

    return Number(
        (
            topScore +
            bottomScore +
            shoesScore +
            accessoryScore
        ).toFixed(2)
    );
}


function scoreOccasion(recommendation) {
    const { occasion, outfit } = recommendation;

    const topScore =
        (outfit.top.occasionScores?.[occasion] ?? 2) / 5 * 12;

    const bottomScore =
        (outfit.bottom.occasionScores?.[occasion] ?? 2) / 5 * 9;

    const shoesScore =
        (outfit.shoes.occasionScores?.[occasion] ?? 2) / 5 * 6;

    const accessoryScore =
        (outfit.accessory.occasionScores?.[occasion] ?? 2) / 5 * 3;

    return Number(
        (
            topScore +
            bottomScore +
            shoesScore +
            accessoryScore
        ).toFixed(2)
    );
}


function getColorCompatibility(color1, color2) {

    if (!color1 || !color2) {
        return 3;
    }

    if (color1 === color2) {
        return 5;
    }

    return (
        colorCompatibility[color1]?.[color2] ??
        colorCompatibility[color2]?.[color1] ??
        3
    );
}


function scoreColor(recommendation) {

    const { outfit } = recommendation;

    const {
        top,
        bottom,
        shoes,
        accessory
    } = outfit;

    const pairs = [
        getColorCompatibility(top.color, bottom.color),

        getColorCompatibility(top.color, shoes.color),

        getColorCompatibility(bottom.color, shoes.color),

        getColorCompatibility(top.color, accessory.color),

        getColorCompatibility(bottom.color, accessory.color)
    ];

    const average =
        pairs.reduce((sum, score) => sum + score, 0)
        / pairs.length;

    return Number(
        ((average / 5) * 15).toFixed(2)
    );
}


function getFormalityCompatibility(score1, score2) {

    const difference = Math.abs(score1 - score2);

    if (difference === 0) return 5;
    if (difference === 1) return 4.5;
    if (difference === 2) return 3;
    if (difference === 3) return 1.5;

    return 0;
}

function scoreFormality(recommendation) {

    const {
        top,
        bottom,
        shoes,
        accessory
    } = recommendation.outfit;

    const pairs = [

        getFormalityCompatibility(
            top.formality ?? 3,
            bottom.formality ?? 3
        ),

        getFormalityCompatibility(
            top.formality ?? 3,
            shoes.formality ?? 3
        ),

        getFormalityCompatibility(
            bottom.formality ?? 3,
            shoes.formality ?? 3
        ),

        getFormalityCompatibility(
            top.formality ?? 3,
            accessory.formality ?? 3
        )
    ];

    const average =
        pairs.reduce((sum, score) => sum + score, 0)
        / pairs.length;

    return Number(
        ((average / 5) * 10).toFixed(2)
    );
}

function getFitCompatibility(fit1, fit2) {

    if (!fit1 || !fit2) return 3;

    const compatibility = {

        slim: {
            slim: 4,
            regular: 5,
            'wide-leg': 5,
            oversized: 5,
            bodycon: 4
        },

        regular: {
            slim: 5,
            regular: 4,
            'wide-leg': 5,
            oversized: 4,
            bodycon: 4
        },

        oversized: {
            slim: 5,
            regular: 4,
            'wide-leg': 3,
            bodycon: 5
        },

        'wide-leg': {
            slim: 5,
            regular: 5,
            oversized: 3,
            bodycon: 5
        },

        bodycon: {
            slim: 4,
            regular: 4,
            oversized: 5,
            'wide-leg': 5
        }
    };

    return (
        compatibility[fit1]?.[fit2] ??
        compatibility[fit2]?.[fit1] ??
        3
    );
}


function scoreOutfitHarmony(recommendation) {

    const {
        top,
        bottom
    } = recommendation.outfit;

    const compatibility =
        getFitCompatibility(
            top.fit,
            bottom.fit
        );

    return Number(
        ((compatibility / 5) * 10).toFixed(2)
    );
}

function getSeasonScore(item, season) {

    if (item.seasonScores?.['all-season']) {
        return 4.5;
    }

    return (
        item.seasonScores?.[season] ?? 2
    );
}


function scoreSeason(recommendation) {

    const { season, outfit } = recommendation;

    const items = [
        outfit.top,
        outfit.bottom,
        outfit.shoes,
        outfit.accessory
    ];

    const average =
        items.reduce((sum, item) => {

            return sum + getSeasonScore(item, season);

        }, 0) / items.length;

    return Number(
        ((average / 5) * 5).toFixed(2)
    );
}


function scoreOutfit(recommendation) {

    const style = scoreStyle(recommendation);
    const occasion = scoreOccasion(recommendation);
    const color = scoreColor(recommendation);
    const formality = scoreFormality(recommendation);
    const harmony = scoreOutfitHarmony(recommendation);
    const season = scoreSeason(recommendation);

    return Number(
        (
            style +
            occasion +
            color +
            formality +
            harmony +
            season
        ).toFixed(2)
    );
}


module.exports = {

    scoreStyle,
    scoreOccasion,
    scoreColor,
    scoreFormality,
    scoreOutfitHarmony,
    scoreSeason,
    scoreOutfit

};