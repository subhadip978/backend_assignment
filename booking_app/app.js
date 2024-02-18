const express=require("express");
const app=express();
const port=3000;
var cors=require('cors')
app.use(cors());
const bodyParser=require("body-parser");
const sequelize=require("./util/database");
const userRoutes=require("./routes/user");
app.use(bodyParser.json({extended:false}));
app.use(userRoutes);

// sequelize
//   .sync()
//   .then(result => {
//     console.log('Database sync successful:', result); // Log the sync result
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
//   })
//   .catch(err => {
//     console.error('Database sync error:', err); // Log any sync errors
//   });