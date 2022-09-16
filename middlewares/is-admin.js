const is_Admin= (req,res,next)=>{
    const token=req.cookies.token
   if(token){
        return next()
   } 
   res.json({
        Status:404,
        massage:"Not you is admin"
   })
}
module.exports={
    is_Admin
}