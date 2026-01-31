import Express from 'express'
import { ProductModel } from '../models/Product.js'

export const productApp = Express.Router();

//To get all the Products GET 
productApp.get('/products', async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).json({message: "All the products", payload: products});
});

//POST - /products
productApp.post('/products', async (req, res) => {
    const newProduct = req.body;
    const newDoc = new ProductModel(newProduct);
    await newDoc.save();
    res.status(201).json({message: "Product added successfully", payload: newDoc});
});

//Get elemt ny id
productApp.get('/products/:productId', async (req, res) => {
    let objId = req.params.productId;
    const product = await ProductModel.findById(objId);
    res.status(200).json({message: "Product Details", payload: product});
});

//Update any product ny id
productApp.put('/products/:productId', async (req, res) => {
    let objId = req.params.productId;
    //get modified 
    let modifiedProduct = req.body;
    //make update
    let l = await ProductModel.findByIdAndUpdate(objId, {$set:{...modifiedProduct}}, {new:true});
    res.status(200).json({message: "Update", docu : l});
})