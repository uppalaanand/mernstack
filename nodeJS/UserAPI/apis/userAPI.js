import Express from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js';
export const userApp = Express.Router();

userApp.get('/users', async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json({message: "users", payload: users});
})

userApp.post('/users', async (req, res) => {
    let newUser = req.body;
    //Create new user Docuemnt
    let newUserDoc = new UserModel(newUser);
    //save info
    await newUserDoc.save();
    res.status(201).json({message : "Created", newUser : newUserDoc})
})


userApp.get('/users/:id', verifyToken, async (req, res) => {
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
    let l = await UserModel.findByIdAndUpdate(objId, {$set:{...modifiedUser}}, {new:true});
    res.status(200).json({message: "Update", docu : l});
})

//Delete User
userApp.delete("/users/:id", async (req, res) => {
    //get objId from url params
    let objId = req.params.id;
    //delete user by id
    let deleteUser = await UserModel.findByIdAndDelete(objId)
    req.status(200).json({message: "user remoed", payload: deleteUser});
})

//Register new User
userApp.post('/register', async (req, res) => {
    //get new user from req
    let newUser = req.body;
    // Hash the password
    let hashedPassword = await hash(newUser.password, 10);
    //store hashedPassword in newUser
    newUser.password = hashedPassword;
    let newDoc = new UserModel(newUser);
    //save the user in db
    await newDoc.save();
    //show response
    res.status(201).json({message : "New User Created", user : newUser});
})

//Login User By Authentication /auth
userApp.post('/login', async (req, res) => {
    //get userObject
    let userCred = req.body;
    //check for username
    let userOfDB = await UserModel.findOne({Username: userCred.Username});
    //if user not found
    if(userOfDB === null) {
        return res.status(404).json({message : "Invalid Cred"});
    }
    //Compare passwords
    let status = await compare(userCred.password, userOfDB.password);
    //if passwords
    if(status === false) {
        return res.status(404).json({message : "User Not Found"});
    }
    //Create signed token
    let signedToken = jwt.sign({Username : userCred.Username}, 'Anand', {expiresIn : 30});
    res.cookie('token', signedToken, { httpOnly : true ,
        secure : false,
        sameSite : 'lax',
    })
    //response
    res.status(200).json({message : "Login success", token : signedToken});
})