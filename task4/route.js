const fs=require('fs');

const requestHandler=(req,res)=>{
const url=req.url;
const method=req.method;

if(url==='/'){

	res.write('<html>');
	res.write('<body> <form action="/message"  method="POST"> <input type="text" name="message"/><button type="submit">SEND</button></form></body>')
	res.write('</html>');
	return res.end();
}



else if(url==='/message' && method==='POST'){
	const body=[];
	req.on('data',(chunk)=>{
		console.log(chunk);
		body.push(chunk);
	})

	return req.on('end',()=>{

		
			const parsedBody=Buffer.concat(body).toString();
			console.log(parsedBody);
			const message= parsedBody.split("=")[1];
			console.log(message);
			fs.writeFile("message.txt",message,(err)=>{
					if(err){
		
						console.log(err);
					}
		
					res.statusCode=302;
					res.setHeader('Location','/');
					return  res.end();
			})
	})



}

res.setHeader('Content-type','text/html');
res.write('<html>');
res.write('<body> <h1>Hello Brother</h1></body>')
res.write('</html>');
res.end();

}


//module.exports=requestHandler;

//module.exports.handler=requestHandler;
//exports.handler=requestHandler;

module.exports={

handler:requestHandler,
sometext:'Some hard coded text'

};
