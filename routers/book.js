
const BookController=require('../controllers/BookController')
const router=require('express').Router()



router.get('/',BookController.limitBooksController)

router.get('/books',BookController.allBooksController)

module.exports=router