import Express from 'express'
import { User } from '../models/User.js'
export const userApp = Express.Router();

userApp.get('/users', async (req, res) => {
    const users = await User.find();
    res.status(200).json({message: "users", payload: users});
})

userApp.post('/users', async (req, res) => {
    let newUser = req.body;
    //Create new user Docuemnt
    let newUserDoc = new User(newUser);
    //save info
    await newUserDoc.save();
})


userApp.get('/users/:id',async (req, res) => {
    //get ObjectID from url params
    let objId = req.params;
    // console.log(objId);
    //find user by id
    let userObj = await UserModel.findById(objId)
    //send res
    res.status(200).json({message: "user", payload: userObj})
})

//Update User
userApp.put('/users/:id', async (req, res) => {
    let objId = req.params.id;
    //get modified 
    let modifiedUser = req.body;
    //make update
    let l = await User.findByIdAndUpdate(objId, {$set:{...modifiedUser}}, {new:true});
    res.status(200).json({message: "Update", docu : l});
})

//Delete User
userApp.delete("/users/:id", async (req, res) => {
    //get objId from url params
    let objId = req.params.id;
    //delete user by id
    let deleteUser = await User.findByIdAndDelete(objId)
    req.status(200).json({message: "user remoed", payload: deleteUser});
})