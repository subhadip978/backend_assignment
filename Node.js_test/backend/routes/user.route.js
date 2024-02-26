const express=require("express");
const router=express.Router();
const {createProduct}=require("../controllers/user.controller");
const {getProduct}=require("../controllers/user.controller.js")
const {deleteProduct}=require("../controllers/user.controller");


router.post("/product",createProduct);
router.get("/product",getProduct);
router.delete("/:id",deleteProduct);


module.exports=router;