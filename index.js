require('dotenv').config()
const express = require('express'); 

const app = express() ;

app.get('/' , (req , res)=>{
    res.send("Hello world")
})

app.get("/signup", (req , res)=>{
    res.send("<h1>Welcome to our Site</h1>")
})
app.get('/youtube',(req , res)=>{
    res.send("<h1>Youtube</h1>")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Expample app listening on port ${process.env.PORT}`)
})