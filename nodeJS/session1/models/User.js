import {Schema, model} from 'mongoose'
//Create User Schema
const userSchema = new Schema({
    username : {
        type : String,
        required : [true, "Username is required"],
        minLength: [4, "Min length should ne 4"],
        maxLength: [6, "Max Length exceeded"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min:[18, "Age should be above 18"],
        max: [25, "Age should be less than 25"]
    }
});

export const User = model("user", userSchema);
//Create User Model with thet Schema
