const mongoose = require ("mongoose");

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    }
},{timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;