export function createMiddleware1(req, res, next) {
    console.log("Middleware1 is executed");
    // res.json({message: "Response from middleware"});
    //forward request to next middleware
    next()
}

export function createMiddleware2(req, res, next) {
    console.log("Middleware2 is executed");
    // res.json({message: "Response from middleware"});
    //forward request to next middleware
    next()
}