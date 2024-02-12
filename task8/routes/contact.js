const path=require("path");
const express= require("express");

const app=express();

const contactController=require("../controllers/contact")
const router=express.Router();
const rootDir=require("../util/path");


router.get("/contactus",(req,res)=>{
	res.sendFile(path.join(rootDir,"views","contact.html"));
})

router.post("/success",contactController.getcontact)
	//res.send('<h1>Form submit successfully</h1>')


module.exports=router