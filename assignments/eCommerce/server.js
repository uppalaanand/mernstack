import Express from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIS/userRoutes.js';
import { productApp } from './APIS/productRoutes.js';

const app = Express();

//middlewares
app.use(Express.json());

// Connect db 
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/eCommerce")
        console.log("Mongodb connected")

        app.listen(3000, () => {
            console.log("Server is running on PORT 3000");
        })
    }catch(err) {
        console.log("Error on running", err);
    }
}
connectDB()

//Routes
app.use('/user-app', userApp);
app.use('/product-app', productApp);

//error handler product by ObjectId
function errorHandler(err, req, res, next) {
    res.json({message: "error", reason: err.message})
}
app.use(errorHandler);

