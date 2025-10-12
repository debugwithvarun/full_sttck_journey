import express from "express"
import {data} from "./Data/data.js"
const app = express()

app.get("/route",(req,res)=>{
    res.send(data)
})

app.listen(8000,()=>console.log("server is up now !!\nGo and Check the link... "))