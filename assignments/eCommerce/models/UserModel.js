import { Schema, model } from "mongoose";

//Create Cart Schema
const cartSchema = new Schema({
    product : {
        type : Schema.Types.ObjectId,
        ref : "product"                //name of product model
    }
})

// Create Schema
const userSchema = new Schema({
    name : {
        type : String,
        required : [true, "Name is required"]
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password is required"]
        // pattern
    },
    cart : {
        type : [cartSchema]
    }
});

//Create Model for User
export const UserModel = model('user', userSchema);