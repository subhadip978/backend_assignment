const path=require("path");
const express=require("express");
const app=express();

const rootDir= require("../util/path")
const router=express.Router();


const productController=require('../controllers/product')
router.get('/add-product',productController.getAddproduct);
	
	
	//res.sendFile(path.join(rootDir, "views","add-product.html"))


router.post('/add-product',(req,res)=>{

	console.log(req.body);
	res.redirect("/");
})


module.exports=router;
