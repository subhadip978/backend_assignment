
const express=require("express");
const router=express.Router();

const {addExpense,deleteExpense,updateExpense,getExpense}=require("../controllers/expense.controller");
const {verifyToken}=require("../verifyToken");

router.get("/add",verifyToken,getExpense);
router.post("/add",verifyToken,addExpense);
router.delete("/:id",verifyToken,deleteExpense);
router.put("/:id",verifyToken,updateExpense);



module.exports=router;