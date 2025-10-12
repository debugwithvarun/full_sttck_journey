const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("home")
})

// 1.get 
app.get("/student",(req,res)=>{
    res.send("GET METHOD");
    console.log("get data")
})

// 2. post 
app.post("/student",(req,res)=>{
    console.log("post data")
    res.send("POST METHOD")
    
})
// 3. put 
app.put("/student",(req,res)=>{
    res.send("PUT METHOD")
    console.log("put data")
    
})
// 4. delete 
app.delete("/student",(req,res)=>{
    res.send("DELETE METHOD")
    console.log("delete data")

})

// refactor code in one line 

app.route("/refactor")
.get((req,res)=>{
    console.log("get")
})
.post((req,res)=>{
    console.log("post")
})
.put((req,res)=>{
    console.log("put")
})
.delete((req,res)=>{
    console.log("delete")
})
app.listen(8000,()=>{
    console.log("server up ! \n http://localhost:8000/")
})