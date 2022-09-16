const { read, write}=require('../utils/FS') 
const IndexGet=(req,res)=>{
    const meals=read('./model/meals.json')
    const restorouns=read('./model/restorouns.json')
    res.render('index.ejs', {meals,restorouns})
}
const mealsPost=(req,res)=>{
    const meals=read('./model/meals.json')
    const {name, restaraunId,img, price}=req.body
    meals.push({
        id:meals.at(-1)?.id+1||1,
        name,
        restaraunId,
        img,
        price
    })
    write('./model/meals.json',meals)
    res.redirect('/admin')
}
const restorounGet=(req,res)=>{
    const restorouns=read('./model/restorouns.json')
    res.render('restorouns.ejs', {restorouns})
}
const restorounPost=(req,res)=>{
    const restorouns=read('./model/restorouns.json')
    const {name, adress, catigory,img}=req.body
    console.log(restorouns);
    restorouns.push({
        id:restorouns.at(-1)?.id+1||1,
        name,
        adress,
        catigory,
        img
    })
    write('./model/restorouns.json',restorouns)
    res.redirect('restorouns')
}
const orders=(req,res)=>{
    const restorouns=read('./model/restorouns.json')
    const meals=read('./model/meals.json')
    const orders=read('./model/orders.json')
    meals.forEach(element => {
       element.restorouns=restorouns.find(e=>e.id==element.restaraunId)
        delete element.restaraunId
    })
   
    
    orders.forEach(element => {
        element.foods=[]
        for(let i=0;i<element.meals.length;i++){
            const foodName=meals.find(e=>e.id==element.meals[i].mealsId)
            const countFood=element.meals[i].count
            element.foods.push({
                foodName,countFood
            })
        }
        delete element.meals
    })
  
    res.render('orders.ejs', {orders})
}
module.exports={
    IndexGet,
    restorounGet,
    orders,
    restorounPost,
    mealsPost
}
