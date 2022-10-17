const http=require('http');
const server=http.createServer((req,res)=>{

    console.log('Request From browser To Server');
});
server.listen(3000,'local host',()=>{


console.Consolelog('server Is Listening');

});
