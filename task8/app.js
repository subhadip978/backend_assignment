
const path=require("path");
const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const port=3000;


const errorController=require("./controllers/error")

const adminRoute=require("./routes/admin")
const shopRoute=require("./routes/shop");
const contactRoute=require("./routes/contact");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);

app.use(errorController.get404);
	//res.status(404).sendFile(path.join(__dirname,"views","404.html"))
	//res.status(404).render('404',{pageTitle:'page not found'})



app.listen(port,()=>{
	console.log(`server is running at ${port}`)
})



