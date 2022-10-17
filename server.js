const http=require('http')
const server=http.createserver((req,res)=>{

    console.log('Request From browser To Server')
});
server.listen(4000,'local host',()=>{


console.Consolelog('server Is Listening');

});
