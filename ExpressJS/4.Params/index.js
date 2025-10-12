import express from "express"
import product_route from "./route/params.js"

const app = express()


app.use((req,res,next)=>{console.log("Incoming:",req.url); next()})
app.use(product_route)

// app.use(product_route)

app.listen(8000, () => console.log("server up"))
