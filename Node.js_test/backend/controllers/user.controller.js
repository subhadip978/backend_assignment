
const db=require("../database/db");
exports.createProduct=async(req,res)=>{
	try{

		const q="INSERT INTO  product(`name`,`description`,`price`,`quantity`)VALUES (?,?,?,?)" ;
		const values=[
				req.body.name,
				req.body.description,
				req.body.price,
				req.body.quantity
		]

		db.query(q,values,(err,data)=>{
				if(err){
					return res.send(err);
				}

				return res.json(data);

		})
	}

	catch(err){
		console.log(err);
	}

}
exports.getProduct=(req,res)=>{

	try{

			const q="SELECT * FROM product";
			db.query(q,(err,data)=>{
				if(err){
					return res.json(err)
				}
				return res.json(data);

			})

	}

	catch(err){
		console.log(err);

	}
}

exports.deleteProduct=(req,res)=>{

	try{

			const itemId=req.params.id;
			const q= "DELETE FROM product WHERE id=?"
			db.query(q,(err,data)=>{
				if(err){
					return res.json(err)
				}
				return res.json("Book has been deleted successfully")

			})

	}
	catch(err){

	}
}

exports.buyProduct=(req,res)=>{


	try{

	}

	catch(err){



	}
}