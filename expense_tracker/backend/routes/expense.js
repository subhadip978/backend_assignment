const express=require('express');
const router=express.Router();
const expenseController=require("../controllers/expense");



router.get("/expenses",expenseController.getExpense);
router.post("/expenses",expenseController.postExpense);
router.delete("/",expenseController.deleteExpense);

module.exports=router;