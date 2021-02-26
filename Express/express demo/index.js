const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/register",(req,res)=>{
    res.send("registration page")
})
app.get("/home",(req,res)=>{
    res.send("home")
})
app.listen(4000,()=>{
    console.log("application startre")
})