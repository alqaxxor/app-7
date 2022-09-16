const { sign } = require('jsonwebtoken')
const { read, write}=require('../utils/FS') 
const GetLogin=(req,res)=>{
    res.render('login.ejs')
}
const LoginPost=(req,res)=>{
    const {name,password}=req.body
    const admins=read('./model/admins.json')
    const admin=admins.find(e=>e.name==name&&e.password==password)
    console.log(admins);
    if(!admin){
        return res.json({
            Status:404,
            massage:"Not found admin"
        })
    }
    const token=sign({id:admin.id,name:admin.name},process.env.secret_key)
    res.cookie("token",token)
    res.redirect('admin')
}
module.exports={
    GetLogin,
    LoginPost
}