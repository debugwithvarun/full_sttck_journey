import express from "express"

const app=express()


app.get("/",(req,res)=>res.send("Home"))

const middleExamle=(req,res,next)=>{
    console.log("middleware")
    next()
}
app.get("/student",middleExamle,(req,res)=>{
    res.send("this is all about miidleware ")
})

app.listen(8000,()=>console.log("server is up"))