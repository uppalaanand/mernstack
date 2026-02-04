import { Schema, model } from "mongoose";

//Create Product Scema
const productSchema = new Schema({
    pid : {
        type : String,
        required : true
    },
    productName : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
}, { timestamps : true });

export const ProductModel = model("product", productSchema);