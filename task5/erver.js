const express=require('express');
const app= express();
const port=3000;


app.use((req,res,next)=>{

	console.log('middleware 1');
	next();
})

app.use((req,res,next)=>{
	console.log("middleware 2");
	next();
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port,()=>{
	console.log(`${port}`);
})