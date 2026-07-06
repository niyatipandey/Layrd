const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    slots:{
        type:Object,
        required:true,
        default:null
    },
    savedAt:{
        type:Date,
        default:Date.now()
    },
},{timestamps:true})

const Outfit = mongoose.model('Outfit',outfitSchema);

module.exports = Outfit;