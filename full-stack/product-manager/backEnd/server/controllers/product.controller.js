const Product = require("../models/product.model");

module.exports.getAllProducts = (req,res) => {
    Product.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.getOneProduct = (req,res) => {
    Product.findOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json({message: "that didn't quite work", err}))
}

module.exports.updateProduct = (req,res) => {
    Product.updateOne({_id: req.params._id}, req.body, {new:true})
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params._id })
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({message: "that didn't quite work", error: err}))
}
