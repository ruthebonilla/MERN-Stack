const Author = require("../models/author.model");

module.exports.getAllAuthors = (req,res) => {
    Author.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.getOneAuthor = (req,res) => {
    Author.findOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updateAuthor = (req,res) => {
    Author.updateOne({_id: req.params._id}, req.body, {runValidators: true, new:true})
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}