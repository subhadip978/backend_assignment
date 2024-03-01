
const db=require("../utils/db") 
const bcrypt=require('bcrypt');

exports.register=(req,res)=>{

const q="SELECT * FROM user WHERE name=?"

db.query(q,[req.body.name],(err,data)=>{
	if(err)return res.status(500).json(err);

	if(data.length)return res.status(409).json("USER ALREADY EXIST");

	const salt=bcrypt.genSaltSync(5);
	const hashedPassword=bcrypt.hashSync(req.body.password,salt)


	const q='INSERT INTO user (`name`,`email`,`password`) VALUE(?)';
	const values=[
		req.body.name,req.body.email,hashedPassword
	]
	db.query(q,[values],(err,data)=>{
		if(err)return res.json(err);
		return res.json("user has been created");

	})


})

}

exports.login=(req,res)=>{


}