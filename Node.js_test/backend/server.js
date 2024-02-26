const express=require("express");
const app=express();
const port =4000;
const cors=require('cors');
const userRoutes=require("./routes/user.route");
const db=require("./database/db");
app.use(express.json());

app.use(cors());
app.use("/api/v1",userRoutes);
app.listen(port,(req,res)=>{
	console.log(`server is running at ${port}`)
})