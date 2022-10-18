
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
 
   let path;
  switch(req.url)
  {
   case '/':
       path='/Nodejs/index.html';
       break;

       default:
           path='/Nodejs/404.html';





  }
   console.log('Request From browser To Server');
  // onsole.log(req.url);
   //console.log(req.method);
   //res.setHeader('Content-Type','txt/html');
   fs.readFile(path,(err,FileData)=>
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

   
}).listen(5000,()=>
   {
  
  console.log('Listinning..............');

   });
