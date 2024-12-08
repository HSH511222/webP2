const http = require('http');

const server = http.createServer((req,res) => {
    res.writenHead(200, {'Content -Type' : 'text/plain'});
    res.write("<h1> hi! my name is soohyun</h1>");
    res.end("hello world!");
});


server.listen(1000, () => {
    console.log("server listens on port 1000!");
})