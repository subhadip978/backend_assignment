const express=require('express');
const mysql=require('mysql2');
const app= express();
const port=3000;

const cors=require('cors');
// const db=require("./database/db")
const expenseRouter=require("./routes/expense");


app.use(cors());
app.use(express.json());


app.use(expenseRouter)


app.listen(port,(req,res)=>{
	console.log(`srever is running at ${port}`)
})