import Express from 'express'
import { User } from '../models/User.js'
export const userApp = Express.Router();

userApp.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json({message: "users", payload: users});
})

