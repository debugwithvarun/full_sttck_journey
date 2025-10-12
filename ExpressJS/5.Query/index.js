import express from "express"
import route from "./route/product.js"
const app=express()

app.use(route)

app.listen(8000,()=>console.log("server up !!!"))