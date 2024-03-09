
const db=require("../utils/db");


exports.addExpense=(req,res)=>{
	const userId=req.user.id ;
	
		
		const q="INSERT INTO expens (`category`,`description`,`expense`,`eid`) VALUES(?,?,?,?)";
		const values=[
			req.body.category,
			req.body.description,
			req.body.expense,
			userId

		]
		db.query(q,values,(err,data)=>{
			if(err) return res.status(403).json("error in addexpense execution in controller: ",err);
			console.log("expense is added");
			res.status(200).json("expense is added successfully");
		})
}

exports.getExpense=(req,res)=>{

		const q="SELECT * FROM expens WHERE eid= ?";


		db.query(q,[req.user.id],(err,data)=>{
			if(err) return res.json("error in getexpense");

			console.log(data)
			res.json(data);
		})
}

exports.deleteExpense=(req,res)=>{

	const q="DELETE FROM expens WHERE eid= ? AND id= ?";

	const values=[req.user.id,req.params.id] ;

	db.query(q,values,(err,data)=>{

		if(err) return res.status(404).json("error in delete user :",err);

		res.status(200).json("successfully deleted");
	})

}

exports.updateExpense=(req,res)=>{
const expenseId=req.params.id ;
const q= "UPDATE expens SET `category`=?,`description`=?,`expense`=? WHERE id=? AND eid=?" ;
const values=[
	req.body.category,
	req.body.description,
	req.body.expense,
	expenseId,
	req.user.id
]
	db.query(q,values,(err,data)=>{
		if(err) return res.status(401).json("error in update expense controller");

		res.json("successfully updated");
	})

}