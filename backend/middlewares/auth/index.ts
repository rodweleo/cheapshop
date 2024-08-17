import { NextFunction, Request, Response } from "express";

function AuthMiddleware(req:Request, res: Response, next: NextFunction){
    //console.log(req)
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE,GET,PATCH,POST,PUT",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
    });

    next();
}

export default AuthMiddleware;