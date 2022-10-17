const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("Hlo World")

    console.log('Request From browser To Server');
    Response.end();
}).listen(4500);
