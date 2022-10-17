const http=require('http');
http.createServer((req,res)=>{
    res.write("Hllooooo World");

    console.log('Request From browser To Server');
    res.end();
});
http.listen(4500,()=>
    {
   req.write("hi");
   console.log('Listinning..............');
req.end();
    });
