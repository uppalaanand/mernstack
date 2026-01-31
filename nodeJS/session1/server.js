// Create HTTPS server
//Import express modele
import Express from 'express'
import mongoose from 'mongoose';
import { connect } from 'mongoose';
import { userApp } from './apis/userAPI.js';
//Create Server
const app = Express();

//Database Connection
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb')
        console.log("DB Connected Success")

        //Assign PORT number
        app.listen(3000, () => {
            console.log(`Running 3000`);
        })
    }catch(err) {
        console.log("Err in DB connection", err);
    }
    
}
connectDB();


app.use("/user-api", userApp);
// Create API's
//GET Request handling routes
app.get("/user", (req, res) => {   
    res.json({message: "This is response from GET req bundle"});
})
//POST Request handling routes
app.post("/user", (req, res) => {
    res.json({message:"This response from POST req handler"});
})
//PUT Request handling routes
app.put("/user/:id", (req, res) => {
    res.json({message:"This response from PUT req handler"});
})
//DELETE Request handling routes
app.delete("/user/:id", (req, res) => {
    res.json({message:"This response from DELETE req handler"});
})
