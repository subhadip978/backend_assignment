const mysql=require("mysql2");

const pool=mysql.createPool({
	host:"localhost",
	user:"root",
	password:"Ineed$10lpa",
	database:"generalstore",
	connectionLimit:10,
	queueLimit:0,



})

pool.getConnection((err,connection)=>{

	if(err){
		console.log(err);
	}
	else{
		console.log(`database is connected`);
		connection.release();
	}
})



module.exports=pool;