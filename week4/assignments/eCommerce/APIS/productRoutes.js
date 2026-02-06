import Express from 'express'
import { ProductModel } from '../models/ProductModel.js';

export const productApp = Express.Router();

//product to create new product
productApp.post('/products', async (req, res) => {
    let newProduct = req.body;
    let newDoc = await ProductModel(newProduct);
    await newDoc.save();
    res.status(201).json({message: "Product Created", product : newDoc});
});

// //get product by id
// productApp.get('/products/:productId', async (req, res) => {

// })