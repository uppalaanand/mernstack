// Create HTTPS server
//Import express modele
import Express from 'express'
//Create Server
const app = Express();
//Assign PORT number
app.listen(3000, () => {
    console.log(`Running 3000`);
})


// Create API's
//GET Request handling routes
app.get("/users", (req, res) => {   
    res.json({message: "This is response from GET req bundle"});
})
//POST Request handling routes
app.post("/users", (req, res) => {
    res.json({message:"This response from POST req handler"});
})
//PUT Request handling routes
app.put("/users/:id", (req, res) => {
    res.json({message:"This response from PUT req handler"});
})
//DELETE Request handling routes
app.delete("/users/:id", (req, res) => {
    res.json({message:"This response from DELETE req handler"});
})
