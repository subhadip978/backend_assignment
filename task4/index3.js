const http= require('http');
const routes=require('./route');
// const fs= require('fs');
const port=3000;

const server=http.createServer(routes.handler);
console.log(routes.sometext);

// const url=req.url ;
// const method=req.method ;



server.listen(port,()=>{
	console.log(`server is running at ${port}`)
})