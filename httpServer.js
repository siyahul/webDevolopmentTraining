var http = require('http'); 
var fs = require('fs');
var url = require('url');

http.createServer((req,res)=>
{
    var q=url.parse(req.url,true);
    console.log(q.pathname);
    console.log(q.query.username);
    if(q.pathname==='/'){
        console.log('main page connected')
        fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'html'})
        res.write(data); 
        res.end();
    })
    }
    else if(q.pathname==='/login'){
        console.log('login page connected')
        fs.readFile('login.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'html'})
        res.write(data); 
        res.end();
    })
    }
    else if(q.pathname==='/loginAction'){
        console.log('Login action page connected')
        res.writeHead(200,{'Content-Type':'html'})
        res.write('<h1>'+q.query.username+'</h1>\n<h1>'+q.query.password+'</h1>')
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'html'})
        console.log('error page connected')
        res.write('Something went wrong')
        res.end();
    }
}).listen(7000,()=>console.log("Server Started"))