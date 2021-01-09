const Server = require('./server');

let server = new Server().app;

let port = 3000;


server.listen(port,()=>{
    console.log(`server connected to port ${port}....`);
})
