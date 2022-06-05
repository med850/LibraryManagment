const express  = require('express')
const res = require('express/lib/response')
const path = require('path')

const routerBook = require('./routers/book')
const app = express()

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views', 'views')




app.use('/', routerBook)



app.get('/contact', (req,res,next)=>{

   res.render('contact')
})




app.get('/about', (req,res,next)=>{

   res.render('about')
})



app.get('/books', (req,res,next)=>{

   
   res.render('books')
})


app.get('/register', (req,res,next)=>{

   
   res.render('register')
})


app.get('/login', (req,res,next)=>{

   
   res.render('login')
})









app.listen(3000, ()=>console.log('server run in port 3000'))