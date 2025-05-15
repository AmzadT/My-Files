const express = require('express');
const productModel = require('../Models/product.model');
const productRouter = express.Router();

// add new product
productRouter.post('/add', async (req, res)=>{
    try {
        const newProduct = await productModel.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
})

// get all products
productRouter.get('/', async (req, res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})


// get a single product
productRouter.get('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const product = await productModel.findById(id)
        if(!product) return res.status(404).json({message: 'Product not found'});
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
})


// update product
productRouter.patch('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
})


// delete product
productRouter.delete('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
})


module.exports = productRouter;