
// Basic built web server 

function server() {
    
    //used to specify web-based location => require
    const HTTP_SERVER = require("http");
    HTTP_SERVER.createServer(function name(request,response) {
        
        console.log("Server Initialize");

        //setting up Headers
        response.setHeader('Set-Cookie', ['type=ninja','language=javascript']);
        response.setHeader('X-Foo','bar')
    

        // Calling response.writehead method
        response.writeHeader(200,{"Content-Type":"text/plain"});
        response.write("Hello World This is my first port creation^^")
        response.end();

    }).listen(8080);
    console.log("Server 8080 port working...");


    HTTP_SERVER.ClientRequest

}

server()