

const express=require('express');
//const { format } = require('path');
const app= express();
const port=3000;

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
	console.log("add cart")
	res.send('<form action="/product"  method="POST"> <input type="text" name="title" id="" /> <input type="text" name="size" id="" /> <button type="submit">Add</button></form>');
	
})

app.post('/product',(req,res,next)=>{
	console.log(req.body);
	res.redirect('/');
	
	
})

app.use('/',(req,res,next)=>{
	res.send('<h1> Welcome to the express</h1>')
})


app.listen(port,()=>{
	console.log(`server is running at ${port}`)
})