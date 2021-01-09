const validation = require('express-validator');

class GlobalMiddleWare{
    static checkError(req,res,next){
        const error = validation.validationResult(req);
        if (!error.isEmpty()) {
            next(new Error(error.array()[0].msg));} 
        else {
            next();}}
   }

module.exports = GlobalMiddleWare;