import express from 'express'
import axios from 'axios';
import redisClient from './redisClient.js';

const app = express();

app.get('/', async (req, res) => {
    const cached = await redisClient.get("apidata");
    if(cached) {
        console.log("Data From Redis");
        return res.json(JSON.parse(cached));
    }
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    console.log("data from api");
    await redisClient.setEx("apidata", 5, JSON.stringify(response.data));
    res.json({message : "success", data : response.data});
})

app.listen(3000, () => {
    console.log("Server is Running Successfully in 3000");
});