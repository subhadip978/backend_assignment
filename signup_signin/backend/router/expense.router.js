
const express=require("express");
const router=express.Router();

const {addExpense}=require("../controllers/expense.controller");
router.post("/add",addExpense);



module.exports=router;