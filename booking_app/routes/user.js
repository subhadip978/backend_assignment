
const express=require('express');
const router=express.Router();
const usercontroller=require("../controllers/usercontroller");


// const path=require("path");
// const rootDir=require("../util/path");

// router.get("/",(req,res)=>{
// 	res.sendFile(path.join(rootDir,"views","index.html"));
// })
router.post("/adduser",usercontroller.addUser);
router.get("/getuser",usercontroller.getUser);
router.delete("/deleteuser/:id",usercontroller.deleteUser);
module.exports=router;