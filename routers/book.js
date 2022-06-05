
const BookController=require('../controllers/BookController')
const router=require('express').Router()



router.get('/',BookController.BookController)

module.exports=router