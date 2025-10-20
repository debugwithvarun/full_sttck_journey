import mongoose from "mongoose";

const ConnectDb=async(DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL)
    }catch(err){
        console.log(err)
    }
}

export default ConnectDb;