
const BookModel = require('../models/book')


exports.limitBooksController=(req,res,next)=>{


    BookModel.getLimitBooks().then(books=>{
        res.render('index',{books:books})
    })


}

exports.allBooksController=(req,res,next)=>{


    BookModel.getAllBooks().then(books=>{
        res.render('books',{books:books})
    })


}