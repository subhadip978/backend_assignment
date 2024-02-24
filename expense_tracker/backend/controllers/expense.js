const db=require("../database/db");


exports.getExpense=(req,res)=>{

	const q = "SELECT * FROM expenses";
	db.query(q, (err, data) => {
	  if (err) {
		console.log(err);
		return res.json(err);
	  }
	  return res.json(data);
	});

}

exports.postExpense=(req,res)=>{

	const q = "INSERT INTO expenses(`title`, `category`, `description`) VALUES (?)";
	const values=[
		req.body.title,
		req.body.category,
		req.body.description
		
	]


	db.query(q, [values], (err, data) => {
		if (err){
		 return res.send(err);
		}
		
		return res.json(data);
	  });


}

exports.deleteExpense=(req, res) => {
	const expenseId = req.params.id;
	const q = " DELETE FROM expenses WHERE id = ? ";
  
	db.query(q, [bookId], (err, data) => {
	  if (err) return res.send(err);
	  return res.json(data);
	});
  }