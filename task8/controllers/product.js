exports.getAddproduct=(req,res,next)=>{

	res.sendFile(path.join(rootDir, "views","add-product.html"))
}
