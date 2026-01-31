import Express from 'express'
import {connect} from 'mongoose'
import { productApp } from './APIS/product.js';

//Express Object
const app = Express();

//middleware
app.use(Express.json());

//Connect to mongodb
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb');
        console.log("Database running success");

        app.listen(3000, () => {
            console.log("Server is running on 3000");
        })
    }catch(err) {
        console.log("Error in connecting", err);
    }
}
connectDB();

//Product apis
app.use('/product-api', productApp)


//error handler product by ObjectId
function errorHandler(err, req, res, next) {
    res.json({message: "error", reason: err.message})
}
app.use(errorHandler);