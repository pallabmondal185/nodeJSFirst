const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world')
    console.log('pallab')
}).listen(8080)
