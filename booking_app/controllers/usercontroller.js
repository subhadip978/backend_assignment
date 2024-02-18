const User=require('../models/user')

exports.addUser=async(req,res)=>{

	const name=req.body.name;
	const email=req.body.email;
	const phone=req.body.phone;

	const data=await User.create({name:name,email:email,phone:phone});
	res.status(201).json(data);
}

exports.getUser=(req,res)=>{
	const users= User.findAll();
	res.status(201).json(users);
}


exports.deleteUser=(req,res)=>{
	const userId=req.param.id;

	destroy({where:{id:userId}})
}