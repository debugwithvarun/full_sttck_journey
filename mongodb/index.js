import express from "express"
import ConnectDb from "./db/ConnectDb.js"
import dotenv from "dotenv"
import user from "./model/User.js"

dotenv.config()
const app =express()
const port=process.env.PORT 
const Database_url=process.env.DATABASE_URL 

ConnectDb(Database_url)


// CRUD OPERATION 

// ======================================================
// 1. create and insert in mongodb database

const createDoc=async()=>{
    // create 
    const user1=new user({
        name:"Varun Chauhan",
        salary:40000,
        age:21,
        gender:"M",
        role:"Full Stack Developer",
        task:[
            {title:"Create Frontend Of OvinfoTech",maxhour:10},
            {title:"Create backend Of OvinfoTech",maxhour:14},
        ]
    })
    const user2=new user({
        name:"Varun Chauhan",
        salary:40000,
        age:21,
        gender:"M",
        role:"Full Stack Developer",
        task:[
            {title:"Create Frontend Of OvinfoTech",maxhour:10},
            {title:"Create backend Of OvinfoTech",maxhour:14},
        ]
    })
    const user3=new user({
        name:"Varun Chauhan",
        salary:40000,
        age:21,
        gender:"M",
        role:"Full Stack Developer",
        task:[
            {title:"Create Frontend Of OvinfoTech",maxhour:10},
            {title:"Create backend Of OvinfoTech",maxhour:14},
        ]
    })
    // insert 
    
    // this insert one at time 
    // const result =await user1.save()
    
    // this insert many at time 
    const result=await user.insertMany([user2,user3])
    
    console.log(result)
}
// createDoc()


// ======================================================
// 2. Retriving the data (Read Operations )

// All 
// console.log(await user.find({},{name:1}))

// By One 
// console.log(await user.findOne())

// By ID 
// console.log(await user.findById("68f3b8eb960c653b26b5dfda",{name:1,task:1}))

// by field 
// console.log(await user.find({name:"Varun Chauhan"}))


// ======================================================
// 3. some extra function 

// A. LIMIT 
// console.log(await user.find().limit(2))

// B. SKIP 
// console.log(await user.find().skip(2))

// C. SORT  {1:Ascending , -1:Dscending}
// console.log(await user.find().sort({name:1})) 

// D. COUNT 
// console.log(await user.countDocuments())

// E. OPERATOR 
// console.log(await user.find({age:{$gt:22}}))

// ======================================================
// 4. UPDATE DATABASE DOCUMENT 

// one at a time 
// const result = await user.updateOne({name:"Varun Chauhan"},{name:"Ojit Chauhan"})
// console.log(result)

// many at a time 
// const result = await user.updateMany({name:"Varun Chauhan"},{name:"niketa Chauhan"})
// console.log(result)

// ======================================================
// 5. DELETE DATABASE DOCUMENT 

// find the id and thn delete them 
// const result=await user.findByIdAndDelete("68f3b8eb960c653b26b5dfda")

// Delete one
// const result = await user.deleteOne({age:21})

// Delete many
// const result = await user.deleteMany({age:21})
// console.clear()


app.listen(port,()=>console.log("SERVER UP !!!"))
