import { Schema, model } from "mongoose";

//Create Schema
const productSchema = new Schema({
    productName : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    brand : {
        type : String,
        required : true
    }
}, { 
    timestamps : true,
    versionKey : false 
});

//Create Model
export const ProductModel = model('product', productSchema);