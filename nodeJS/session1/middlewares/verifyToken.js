import jwt from "jsonwebtoken";

export function verifyToken(err, res, req, next) {
    //token verification logic

    //1. get token from request(cookie-parser is used to extract)
    let signedToken = req.body?.token;
    if(!signedToken) {
        return res.status(401).json({message : "Please Login First"});
    }
    console.log(req.cookies);
    // 2.verify Token
    let decodedToken = jwt.verify(signedToken, 'Anand');
    console.log("Decoded token:", decodedToken);
    next();
}