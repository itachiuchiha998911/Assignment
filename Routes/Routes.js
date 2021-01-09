const {Router} = require('express');
const RoutesValidator = require('../Validators/RoutesValidator');
const GlobalMiddleWare = require('../Globalmiddleware/globalmiddleware');
const RoutesController = require('../controller/RoutesController');

class Routes{
    constructor(){
        this.router = Router();
        this.postRoutes();
    }
    postRoutes(){
        this.router.post('/addNumber',RoutesValidator.check(),GlobalMiddleWare.checkError,RoutesController.addNumber);
    }
    
} 
module.exports = new Routes().router; 
