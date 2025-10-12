import express from "express"

import student from "./route/Student.js"

const app=express()

app.use("/",student)

app.listen(8000,()=>console.log("Server Up !!!"))

