const mongoose = require('mongoose');

const scoreMap = {
    type: Map,
    of: { type: Number, min: 1, max: 5 },
    default: {}
};

const clothingItemSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender: { type: String, enum: ['men', 'women', 'unisex'], required: true },
    category: { type: String, enum: ['top', 'bottom', 'shoes', 'accessory'], required: true },
    subCategory: { type: String },

    style: [String],
    styleScores: scoreMap,

    occasion: [String],
    occasionScores: scoreMap,

    season: [String],
    seasonScores: scoreMap,

    color: { type: String, required: true },

    material: { type: String },
    materialScore: { type: Number, min: 1, max: 5 },

    fit: { type: String },
    fitScore: { type: Number, min: 1, max: 5 },

    formality: { type: Number, min: 1, max: 5 },
    formalityScore: { type: Number, min: 1, max: 5 },

    warmth: { type: Number, min: 1, max: 5 },

    layering: { type: Boolean, default: false },

    tags: [String],

    imageUrl: { type: String, required: true },

    favorite: { type: Boolean, default: false },
    archived: { type: Boolean, default: false }
});

const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);

module.exports = ClothingItem;