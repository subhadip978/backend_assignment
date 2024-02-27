const express=require("express");
const cors=require("cors");

const app=express();
const port=3000;
app.use(express.json());
const db=require("./util/database");
app.use(cors());
  // Test the connection
//  db.getConnection((err, connection) => {
// 	if (err) {
// 	  console.error('Error connecting to database:', err);
// 	} else {
// 	  console.log('Connected to database');
// 	  connection.release(); // Release the connection
// 	}
//   });





app.get("/books",(req,res)=>{
	const q="SELECT * FROM product"
	db.query(q,(err,data)=>{
		if(err){
			return res.json(err)
		}
		return res.json(data);
	})
})

app.post("/books",(req,res)=>{
	const q="INSERT INTO product (`title`,`description`,`cover`,`price`) VALUES (?)";
	const values=[
		req.body.title,
		req.body.description,
		req.body.cover,
		req.body.price
	]
	//const values=["title from backend" ,"description from","cover from"]
	db.query(q,[values],(err,data)=>{
		if(err){
			return res.json(err)
		}
		return res.json(data);
	})
})




app.delete("/books/:id",(req,res)=>{
	const bookId=req.params.id;
	const q="DELETE FROM product WHERE id=?"

	db.query(q,[bookId],(err,data)=>{
		if(err){
			return res.json(err);
		}
		return res.json("BOOK has been delete successfully")
	})

})


app.put("/books/:id",(req,res)=>{
	const Id=req.params.id ;
	const q = "UPDATE product SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?";
	const values=[
		req.body.title,
		req.body.description,
		req.body.price,
		req.body.cover,
	]


	db.query(q,[...values,Id],(err,data)=>{
		if(err) return res.json(err);
		return res.json("successfully updated")
	})

})

app.listen(port,()=>{
	console.log(`server is running at ${port}`)
})