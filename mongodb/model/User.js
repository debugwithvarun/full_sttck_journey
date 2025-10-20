import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    role:{type:String,required:true},
    age:{type:Number},
    salary:{type:mongoose.Decimal128,required:true,validate:(v)=>v>=30000},
    gender:{type:String},
    task:[
        {title:String,maxhour:Number}
    ]
})

const user=mongoose.model("users",UserSchema)

export default user;