const http=require('http');
http.createServer((req,res)=>{
    res.write("Hllooooo World");

    console.log('Request From browser To Server');
    res.end();
}).listen(4500,(req)=>
    {
   
   console.log('Listinning..............');

    });
