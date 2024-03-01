const mysql=require('mysql2');


const pool=mysql.createPool({
	host:'localhost',
	user:"root",
	database:"expense",
	password:"Ineed$10lpa",
	connectionLimit:"10"
})

pool.getConnection((err,connection)=>{
	if(err){
		console.log(err)
	};
	console.log(`database is connected`)
	connection.release();
})

module.exports=pool;