const mysql=require("mysql2");

const pool= mysql.createPool({
	host:"localhost",
	user:"root",
	password:"Ineed$10lpa",
	database:'node.js',
	waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0



})

pool.getConnection((err,connection)=>{
	if(err){
		console.error('error');
	}

	else{
		console.log('database connected');
		connection.release();
	}
})

module.exports=pool;