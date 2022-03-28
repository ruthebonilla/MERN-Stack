const Pirate = require("../models/pirate.model");

module.exports.getAllPirates = (req,res) => {
    Pirate.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.getOnePirate = (req,res) => {
    Pirate.findOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updatePirate = (req,res) => {
    Pirate.updateOne({_id: req.params._id}, req.body, {runValidators: true, new:true})
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}