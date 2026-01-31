import Express from 'express'

export const userRoutes = Express.Router();

//Test Data
let users = [];

// GET /users   --- Get all users
userRoutes.get('/users', createMiddleware1,(req, res) => {
    res.status(200).json({message : "All Users", payload : users});
});

userRoutes.post('/users', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json({message: newUser});
})

userRoutes.put('/users/:id', (req, res) => {
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

userRoutes.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    let index = users.findIndex(user => user.id === userId);
    let deletedUser = users.splice(index, 1);
    res.status(200).json({message: "Deleated user", payload: deletedUser})
});


