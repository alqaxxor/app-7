const express=require('express')
const { deleteProduct, deleteRestoroun } = require('../controllers/delete')
const { GetLogin, LoginPost } = require('../controllers/login.admin')
const { IndexGet, restorounGet, orders, restorounPost, mealsPost } = require('../controllers/main')
const { userRest, userFoods, category, categoryPost, korzinka, order } = require('../controllers/user')
const app =express()
const { is_Admin } = require('../middlewares/is-admin')

const {Router}=express
const router=new Router

router
    .get('/login',GetLogin)
    .post('/',LoginPost)
    .get('/admin',is_Admin,IndexGet)
    .get('/restorouns',is_Admin,restorounGet)
    .post('/rest',restorounPost)
    .post('/meals',mealsPost)
    .get('/orders',is_Admin,orders)
    .delete('/deletProduct/:id',deleteProduct)
    .delete('/deletRest/:id',deleteRestoroun)

    .post('/category',categoryPost)
    .get('/category',category)
    .get('/userRestorouns',userRest)
    .get('/userFoods',userFoods)
    .get('/korzinka',korzinka)
    .post('/order',order)

module.exports=router