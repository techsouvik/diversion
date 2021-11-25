const express = require('express')
const bodyparser = require('body-parser')

const ejs = require('ejs')
const app = express()

const port = process.env.PORT || 3000
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({
     extended:true
}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
     res.render("index")
})
app.get("/register",(req,res)=>{
     res.render("register")
})


app.listen(port,()=>{
     console.log("Server is running at PORT 3000")
})