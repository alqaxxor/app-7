const { read, write}=require('../utils/FS') 
const deleteProduct=(req,res)=>{
    const {id}=req.params
    console.log(id)
    const meals=read('./model/meals.json')
    const delet=meals.findIndex(e=>e.id==id)
    meals.splice(delet,1)
    write('./model/meals.json',meals)
    res.json({
        meals
    })
}
const deleteRestoroun=(req,res)=>{
    const {id}=req.params
    const allMeals=read('./model/meals.json')
    const meals=allMeals.filter(e=>e.restaraunId!=id)
    const restorouns=read('./model/restorouns.json')
    const delet=restorouns.findIndex(e=>e.id==id)
    restorouns.splice(delet,1)
    write('./model/restorouns.json',restorouns)
    res.json({
        restorouns
    })

    write('./model/meals.json',meals)
}
module.exports={
    deleteProduct,
    deleteRestoroun
}