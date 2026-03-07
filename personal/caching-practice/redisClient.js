import { createClient } from 'redis'

const redisClient = createClient({
    url : "redis://localhost:6379"
});

redisClient.on("error", (err) => {
    console.log("redis Errr: ", err);
});

async function connectRedis() {
    await redisClient.connect();
    console.log("Redis Connected");
}

connectRedis();

export default redisClient;