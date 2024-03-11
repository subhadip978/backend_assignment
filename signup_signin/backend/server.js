const express=require('express');
const app= express();
const port=3000;
const cors=require("cors")
const db=require("./utils/db");
const dot=require("dotenv");
const cookieParser=require('cookie-parser')

const authRouter=require("./router/auth.router");
const expenseRouter=require("./router/expense.router");
const premiumRouter=require("./router/premium.router");
const leaderboardRouter=require("./router/leaderboard")

dot.config();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Credentials"," true");
	next();
});


app.use(express.json());
// Configure CORS
app.use(cors({
	origin: 'http://localhost:5173' ,// Allow requests from this origin
	credentials: true // Allow credentials (e.g., cookies) to be sent with the request
  }));
app.use(cookieParser())


app.use("/api",authRouter);
app.use("/api",expenseRouter);
app.use("/api",premiumRouter);
app.use("/api",leaderboardRouter)


app.get("/api/getkey",(req,res)=>{
	res.status(200).json({key: "process.env.RZP_KEY_ID"})
})
app.listen(port,()=>{
	console.log(`server is running at ${port}`)
})