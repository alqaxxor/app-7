const express=require('express')
const path=require('path')
require('dotenv').config()
const app=express()
const cookieParser = require('cookie-parser')

const ejs=require('ejs')
const router = require('./routers/router')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(cookieParser())
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(router)

app.listen(5050,console.log(5050))