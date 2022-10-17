const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1><b>Naresh Thapa World</b></h1>");

    console.log('Request From browser To Server');
    console.log(req.url);
    console.log(req.method);
    res.end();
}).listen(4500,'localhost',(a)=>
    {
   
   console.log('Listinning..............');

    });
