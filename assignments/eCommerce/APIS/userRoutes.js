import Express from 'express'
import { hash } from 'bcryptjs'
import { UserModel } from '../models/UserModel.js';

export const userApp = Express.Router();

//Create User
userApp.post('/register', async (req, res) => {
    //get New user from req
    let newUser = req.body;
    //Hash the user password
    let hashedPassword = await hash(newUser.password, 10);
    //store the hashed password in new User
    newUser.password = hashedPassword;
    //Create a User Document
    let newDoc = await UserModel(newUser);
    //Save the User in DB
    await newDoc.save();
    //Send Response
    res.status(201).json({messsage : "User Created successfully", user : newDoc});
});

//Add product to user's cart
userApp.put('/user-cart/userid/:userId/productid/:productId', async (req, res) => {
    let userId = req.params.userId;
    let productId = req.params.productId;
    let updatedUser = await UserModel.findByIdAndUpdate(userId, {$push : {"cart" : { product : productId }}}, { new : true});
    res.status(200).json({message : "User Updated", updatedUser: updatedUser});
})