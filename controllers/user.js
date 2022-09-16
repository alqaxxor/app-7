const { read, write}=require('../utils/FS') 

const category=(req,res)=>{
    res.render('user.ejs')
}

const categoryPost=(req,res)=>{
   const {fast,milliy}=req.body
   if(fast) {
        res.cookie("category",fast)
        res.redirect('/userRestorouns')
   } else if(milliy) {
        res.cookie("category",milliy)
        res.redirect('/userRestorouns')
   }
}

const userRest=(req,res)=>{
    const category=req.cookies.category
    const restorounsAll=read('./model/restorouns.json')
    const restorouns=restorounsAll.filter(e=>e.catigory==category)
    res.render('user.rest.ejs',{restorouns})
}

const userFoods=(req,res)=>{
    const restId=req.cookies.restorounId
    const allMeals=read('./model/meals.json')
 
    const meals=allMeals.filter(e=>e.restaraunId==restId)
    res.render('user.food.ejs',{meals})
}


const korzinka=(req,res)=>{
    const productId=[]
    for (let i in req.cookies) {
        
        if(i.split('productId').length==2){
            
            productId.push(...i.split('productId').filter(e=>e))
        }
    }
    const allMeals=read('./model/meals.json')
    const orderFood=allMeals.filter(e=>e.id==productId.find(el=>el==e.id))
   
    res.render('korzinka.ejs',{orderFood})
}

const order=(req,res)=>{
    const {user_name,user_phone,address}=req.body
    const productId=[]
    const meals=[]
    for (let i in req.cookies) {
        
        if(i.split('productId').length==2){
            
            productId.push(...i.split('productId').filter(e=>e))
        }
    }
   
    for (let index = 0; index < productId.length; index++) {
        const element = productId[index];
        meals.push({
            mealsId:element.split(',')[0],
            count:1
        })
       
    }
    if (meals.length>=1) {
        const allOrders=read('./model/orders.json')
        allOrders.push({
            id:allOrders.at(-1)?.id+1||1,
            user_name,
            user_phone,
            meals:meals,
            address
        })
        write('./model/orders.json',allOrders)
       return  res.redirect('/category')
    } else {
        return res.redirect('/category')
    }   
}

module.exports={
    userRest,
    userFoods,
    category,
    categoryPost,
    korzinka,
    order
}