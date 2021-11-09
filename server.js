const http = require('http');
const fs = require('fs');

let accounts = [
    {
        name : "Danilo",
        job : "developer"
    },
    {
        name : "Lav",
        job : "gamer"
    }
]

const server = http.createServer((req, res) =>{
    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200,{"Content-Type": 'text/html'});
        let rs = fs.createReadStream('index.html');
        rs.pipe(res);
    }else if(req.url ==="/kontakt"){
        res.writeHead(200,{"Content-Type": 'text/html'});
        let rs = fs.createReadStream('kontakt.html');
        rs.pipe(res);
    }else if(req.url === "/data"){
        res.writeHead(200,{"Content-Type": 'aplication/JSON'});
        res.end(JSON.stringify(accounts));
    }if (req.url ==="/main.css") {
        res.writeHead(200,{"Content-Type": 'text/css'});
        let rs = fs.createReadStream('main.css');
        rs.pipe(res);
    }    
})

server.listen(3000, ()=>{
    console.log('Listening to port 3000');
})