const express= require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
	console.log("add cart")
	res.send('<form action="/product"  method="POST"> <input type="text" name="title" id="" /> <input type="text" name="size" id="" /> <button type="submit">Add</button></form>');
	
})

router.post('/product',(req,res,next)=>{
	console.log(req.body);
	res.redirect('/');
	
	
})


module.exports=router;