// import jokes model
const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req,res) => {
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.getOneJoke = (req,res) => {
    Joke.findOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updateJoke = (req,res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}



