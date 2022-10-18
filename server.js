
const http=require('http');
 const fs=require('fs');
const server=http.createServer((req,res)=>{
    res.write("<h1><b><marquee>Naresh Thapa Word</marquee></b></h1>");

    console.log('Request From browser To Server');
   // onsole.log(req.url);
    //console.log(req.method);
    //res.setHeader('Content-Type','txt/html');
    fs.readFile('./NODEJS/index.html',(err,FileData)=>
    {
    if(err)
    {
    console.log(err);
   }
  else
   {
    res.end(FileData);
   }   

    });
    
}).listen(4500,()=>
    {
   
   console.log('Listinning..............');

    });
