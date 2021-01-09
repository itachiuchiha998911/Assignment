const express = require('express');
const Routes = require('./Routes/Routes');


class Server{
    constructor(){
        this.app = express();
        this.setRoutes();
        this.handleErrors();
        this.error404Handler();
        }

        setRoutes(){  
            
            this.app.use('/api',Routes);
      
          }
        
        error404Handler(){
            this.app.use((req,res)=>{
              const s={
                  "message":"Invalid EndPoint",
                  "status_code":"404"}
              res.status(404).send(s);})
          }

        handleErrors() {
              this.app.use((error, req, res, next) => {
                  //console.log('inside error handler...')
                  const errorStatus = req.errorStatus || 500;
                  res.status(errorStatus).json({
                      message:  error.message || 'Something Went Wrong. Please Try Again',
                      status_code: errorStatus})})}
        

}

module.exports = Server;
