const express = require('express');

const router = express.Router();

const products = require("../data/products")

// Get all products
router.get("/" , (req,res) => {
    res.status(200).json(products);
})

// Get single product by ID
router.get("/:id" , (req,res) => {
    const product = products.find((product) => product._id === req.params.id)
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
})

module.exports = router;