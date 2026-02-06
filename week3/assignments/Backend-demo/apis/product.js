import Express from 'express'

export const appp = Express.Router();

let products = []

//Get all the products
appp.get('/products', (req, res) => {
    res.status(200).json({message : "Get All Products", payload : products});
});

//Get product by brand
appp.get('/products/:brand', (req, res) => {
    let data = products.filter(product => {
        product.brand === req.params.brand
    })
    res.status(200).json({message : "Product data", payload : data});
})

//Add new product
appp.post('/products', (req, res) => {
    let product = req.body;
    products.push(product);
    res.status(201).json({message : "Product added successfully"});
});

//Get product by productId
appp.put('/products/:productId', (req, res) => {
    let productId = req.params.productId;
    let modPro = req.body;
    let idx = products.findIndex(product => product.productId === productId);
    if(idx !== -1) {
        return res.status(500).json({message: "Product not found"});
    }else{
        products.splice(idx, 1, modPro);
    }
    res.status(200).json({message : "Product Updated", payload: products});
});

//Delate any product by productId
appp.delete('products/:productId', (req, res) => {
    const productId = req.params.productId;
    console.log(productId);
    let index = products.findIndex(product => product.productId === productId);
    let deletedPro = products.splice(index, 1);
    res.status(200).json({message: "Deleated Product", payload: deletedPro})
})
