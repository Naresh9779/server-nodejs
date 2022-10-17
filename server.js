
const http=require('http');
/*const server=http.createServer((req,res)=>{
    res.write("Hlo World")

    console.log('Request From browser To Server');
    res.end();
}).listen(4500);*/


http.createServer((req,res)=>{
    res.write("Hllo World");
    res.end();
}).listen(4500);