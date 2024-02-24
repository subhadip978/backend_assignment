const mysql=require('mysql2');


const db=mysql.createPool({
	host:'localhost',
	user:'root',
	password:"Ineed$10lpa",
	database:'nodecomplete',
	connectionLimit:10

})

db.getConnection((err,connection)=>{

	if(err){
		console.log(err);
	}
	else{
		console.log(`database is connected`);
		connection.release();
	}
})


module.exports=db;