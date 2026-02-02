import { Schema, model } from 'mongoose';

//Create User Scema
const userSchema = Schema({
    Username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
}, {
    timestamps : true
});

// Create User Model
export const UserModel = model('user1', userSchema);