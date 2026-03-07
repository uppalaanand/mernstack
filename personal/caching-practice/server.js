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
    await redisClient.setEx("apidata", 1000, JSON.stringify(response.data));
    res.json({message : "success", data : response.data});
});

app.get('/todos/:id', async (req, res) => {
    const {id} = req.params;
    const key = `todos:${id}`;
    const cached = await redisClient.get(key);
    if(cached) {
        console.log("Data from Redis");
        return res.json({source : "Redis", data : JSON.parse(cached)});
    }
    const response = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log("Data From Api");
    await redisClient.setEx(key, 1000, JSON.stringify(response.data));
    res.json({message : "Success", data : response.data});
})

app.listen(3000, () => {
    console.log("Server is Running Successfully in 3000");
});