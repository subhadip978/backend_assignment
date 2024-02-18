const Sequelize=require('sequelize');

const sequelize = new Sequelize({
	dialect: 'mysql', // Specify the dialect of your database (e.g., mysql, postgres, sqlite)
	host: 'localhost', // Specify the host of your database
	username: 'root', // Specify your database username
	password: 'Ineed$10lpa', // Specify your database password
	database: 'nodecomplete', // Specify your database name
  });

module.exports=sequelize ;