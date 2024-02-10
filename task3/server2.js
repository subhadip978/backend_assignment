const http = require('http');
const port = 4000;
const fs=require('fs');
const server = http.createServer((req, res) => {
	const body=[];
	const method=req.method;
	const url = req.url;


    if (url === '/') {
		
		fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
			if(err){
				console.log(err);
			}
			console.log("data from file",data);
			res.write('<html>');
			res.write(`<p>${data}</p>`);
			res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">SEND</button> </form> </body>');
			res.write('</html>');
			return res.end();
		})


    }

	else if(url==='/message' && method==='POST'){

		req.on('data',(chunk)=>{
			body.push(chunk);
		});


		return req.on("end",()=>{
			const parseBody= Buffer.concat(body).toString();
			console.log("parseBody",parseBody);
			const message= parseBody.split("=")[1];
			fs.writeFile("message.txt",message,(err)=>{
				if(err){
					console.log(err);
				}
				console.log("inside fs.writeFile");
				res.statusCode=302;
				res.setHeader("Location","/");
				return res.end();
			});
		});
	}


	
else{

    res.setHeader('Content-Type', 'text/html');
	res.write('<html>')
    res.write(' <h1> hi bro</h1>');
	res.write('</html>')
    res.end();
}
});

server.listen(port, () => {
    console.log(`server listen at ${port}`);
});

