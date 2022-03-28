const mongoose = require ("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    imageUrl: {
        type: String,
        required: [true, "must include an image url"]
    },
    chests:{
        type: Number,
        required: [true, "chest number is required"],
    },
    catchPhrase:{
        type: String,
        required: [true, "catch phrase is required"]
    },
    crewPosition:{
        type: String,
        required: [true, "position is required"]
    },
    pegLeg:{
        type: Boolean,
        required: [true, "field cannot be empty"]
    },
    eyePatch:{
        type: Boolean,
        required: [true, "field cannot be empty"]
    },
    hookHand:{
        type: Boolean,
        required: [true, "field cannot be empty"]
    }


},{timestamps:true})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;