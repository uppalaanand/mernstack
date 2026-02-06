import Express from 'express'
import { hash } from 'bcryptjs'
import { UserModel } from '../models/UserModel.js';
import { ProductModel } from '../models/ProductModel.js';

export const userApp = Express.Router();

//Create User
userApp.post('/register', async (req, res) => {
    //get New user from req
    let newUser = req.body;
    //Validate newUser
    new UserModel(newUser).validate();
    //Hash the user password
    let hashedPassword = await hash(newUser.password, 10);
    //store the hashed password in new User
    newUser.password = hashedPassword;
    //Create a User Document
    let newDoc = await UserModel(newUser);
    //Save the User in DB
    await newDoc.save({validateBeforeSave : false});
    //Send Response
    res.status(201).json({messsage : "User Created successfully", user : newDoc});
});

//Add product to user's cart
// userApp.put('/user-cart/userId/:userId/productId/:productId', async (req, res) => {
//     //Get Parameters from req
//     let userId = req.params.userId;
//     let productId = req.params.productId;
//     // let { userId, productId } = req.params;
//     // console.log(req.params);
//     //Check User
//     let user = await UserModel.findById(userId);
//     if(!user) {
//         return res.status(401).json({message : "User not found"});
//     }
//     //Check Product
//     let product = await ProductModel.findById(productId);
//     if(!product) {
//         return res.status(401).json({message : "Product not found"});
//     }
//     let updatedUser = await UserModel.findByIdAndUpdate(userId, {$push : {"cart" : { product : productId, quantity : 1 }}}, { new : true})
//     // .populate("cart.product", "productName price")
//     res.status(200).json({message : "User Updated", updatedUser: updatedUser});
// });

// 
userApp.put('/user-cart/userId/:userId/productId/:productId', async (req, res) => {
    const { userId, productId } = req.params;
    // const { quantity } = req.body;

    // Check User
    let user = await UserModel.findById(userId);
    if(!user) {
        return res.status(401).json({message : "User not found"});
    }
    //Check Product
    let product = await ProductModel.findById(productId);
    if(!product) {
        return res.status(401).json({message : "Product not found"});
    }

    //get the user object
    let productObj = user.cart.find(product => product.product.toString() == productId);
    if(productObj) {
        productObj.quantity += 1;
    }else{
        user.cart.push({product : productId, quantity : 1});
    }
    await user.save();
    // //if product exist then increment
    // let updatedUser = await UserModel.findOneAndUpdate({ _id : userId, "cart.product" : productId }, {$inc : {"cart.$.quantity" : 1 }}, { new : true });
    // if(!updatedUser) {
    //     updatedUser = await UserModel.findByIdAndUpdate(userId, {$push : {"cart" : { product : productId, quantity : 1 }}}, { new : true})
    // }
    res.status(200).json({message : "Cart Updated", User : user});
})

//Read User by id
userApp.get('/users/:userId', async (req, res) => {
    const { userId } = req.params;

    //Find user
    let user = await UserModel.findById(userId).populate("cart.product", "productName price");

    //res
    res.status(200).json({message : "User", User : user});
})