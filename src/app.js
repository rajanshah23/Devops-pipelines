const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send ("Hello to Devops Piplines")
 
})

app.get("/home",(req,res)=>{
    res.json({"message":"Welcome to Home Page"})
})

module.exports=app