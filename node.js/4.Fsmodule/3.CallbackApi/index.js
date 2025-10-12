import { error } from "console"
import * as fs from "fs"


    // 1 create directory 
    fs.mkdir(  "D:\\tryjs",(error)=>{
        if(error){
            console.log(error)
        }
        console.log("done")
    })
   


    // remaning is same as promise and sync 