const http = require('http');
const fs = require("fs");

const server = http.createServer();

server.on ('request', (req,res) => {
    const filename = "week2.html";
    fs.readFile(filename, (err, data) =>{
        res.writenHead(200, {'Content -Type' : 'text/plain'});
        if(err != null) {
            console.log("error\n");
            res.write("<h1> Error </h1>");
        }
        res.end(data);
        res.end();
    });
});


server.listen(3000, () => {
    console.log("server listens on port 3000!");
})