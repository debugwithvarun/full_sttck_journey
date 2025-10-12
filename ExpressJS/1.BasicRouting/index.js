import express from 'express'
const app = express()

// 1.basic route 
app.get("/",(req,res)=>{
    res.send("welcome to Express.js")
})

// 2. regex route 
app.get(/^\/ab?cd$/,(req,res)=>{
    res.send("either acd or abcd both work.")
})


// 3. double callback 
app.get("/double-cb",(req,res,next)=>{
    console.log("hello")
    next()
},(req,res)=>{
    res.send("<h1>varun Chauhan</h1>")
})

// 4. array callback 

const cb1=(req,res,next)=>{
    console.log("first")
    next()
}

const cb2=(req,res,next)=>{
console.log("second")
    next()
}

const cb3=(req,res,next)=>{
console.log("third")
next()
}

const cb4=(req,res)=>{
    console.log("fourth")
    res.send("array callback")
}

app.get("/array-cb",[cb1,cb2,cb3,cb4])


// 5. mix callback 
app.get("/mix-cb",(req,res,next)=>{
    console.log("mix callback")
    next()
},
[cb1,cb2,cb3,cb4])

app.listen(8000,()=>console.log("server up!!!"))