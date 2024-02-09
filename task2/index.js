const http=require('http');



const server=http.createServer((req,res)=>{
	const url = req.url;

    if (url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome home');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to About Us page');
    } else if (url === '/node') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my Node Js project');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
})

const port=3000;
server.listen(port,()=>{
	console.log(`server is running at ${port}`)
});