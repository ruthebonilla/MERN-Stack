const Memory = require("../models/memory.model");

module.exports.getAllMemories = (req,res) => {
    Memory.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.getOneMemory = (req,res) => {
    Memory.findOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.createMemory = (req,res) => {
    Memory.create(req.body)
        .then(newMemory => res.json(newMemory))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updateMemory = (req,res) => {
    Memory.updateOne({_id: req.params._id}, req.body, {runValidators: true, new:true})
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.deleteMemory = (req,res) => {
    Memory.deleteOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}