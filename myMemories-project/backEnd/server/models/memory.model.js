const mongoose = require ("mongoose");

const MemorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title of memory is required"]
    },
    image: {
        type: String,
        required: [true, "choose an image from files or grab one from google to be displayed"]
    },
    description: {
        type: String,
        required: [true, "must include a short description"]
    },
    date: {
        type: String,
        required: [true, "date of memory is required"]
    },
    tags: {
        type: String,
        required: [true, "must include tags"],
        validate: {
            validator(tags) {
                return tags.includes("#")
            },
            message: "tags must start with #"
        },
    },
    likeCount: {
        type: Number,
        default: 0
    }


},{timestamps:true})

const Memory = mongoose.model("Memory", MemorySchema);

module.exports = Memory;