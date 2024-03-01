const express=require('express');
const app= express();
const port=3000;
const cors=require("cors")
const db=require("./utils/db");

const authRouter=require("./router/auth.router");

app.use(cors())
app.use(express.json());


app.use("/api",authRouter);


app.listen(port,()=>{
	console.log(`server is running at ${port}`)
})