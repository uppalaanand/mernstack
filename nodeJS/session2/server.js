//Importing Express Package
import Express from 'express'
import { createMiddleware1, createMiddleware2 } from './createMiddleware.js';

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

//Test Data
let users = [];

// GET /users   --- Get all users
app.get('/users', createMiddleware1,(req, res) => {
    res.status(200).json({message : "All Users", payload : users});
});

app.post('/users', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json({message: newUser});
})

app.put('/users/:id', (req, res) => {
    // Get modified user from get
    let id = Number(req.params.id);
    //check user exists in array or not 
    let data = users.findIndex(user => user.id === id);
    console.log(data);

    let modifiedUser = req.body;
    
    //if user not found, send res as "User not found"
    if(!data) {
        return res.status(404).json({message: "User not found"});
    }else{
        users.splice(data, 1, modifiedUser);
    }
    //send res as "user modified"
    res.status(200).json({message: "User modified", data : users});
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    let index = users.findIndex(user => user.id === userId);
    let deletedUser = users.splice(index, 1);
    res.status(200).json({message: "Deleated user", payload: deletedUser})
});

