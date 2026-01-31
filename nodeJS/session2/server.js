//Importing Express Package
import Express from 'express'
import { createMiddleware1, createMiddleware2 } from './createMiddleware.js';
import { appp } from './apis/product.js'

//Create Object for Express
const app = Express();

app.listen(3000, () => {
    console.log("Backend Running at 3000");
});

//Body parsing middleware
app.use(Express.json());
//If we want to execute a middleware for every request we can use app.use()
// app.use(createMiddleware1);
app.use(createMiddleware2);




// Create Products API in the same file
// Description Products obj:
// {
//     productId,
//     name,
//     price,
//     brand
// }


app.use('/hello', appp);
