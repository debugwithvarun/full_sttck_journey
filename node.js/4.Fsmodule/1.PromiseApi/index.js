import * as fs from "fs/promises"

try{
    // 1 create directory 
    // const a=await fs.mkdir(  "D:\\tryjs\\a.txt",{recursive:true})
    // const a=await fs.mkdir(  "D:\\tryjs\\b.txt",{recursive:true})
    // const a=await fs.mkdir(  "D:\\tryjs\\c.txt",{recursive:true})

    // 2. remove directory 
    // await fs.rmdir("D:\\tryjs\\a.txt")
    // await fs.rmdir("D:\\tryjs")

    // 3. Read directory 
    // const files =await  fs.readdir("D:\\tryjs")
    // for (const f of files){
    //         console.log(f)
    // }


    // 4 . create and write files 
    // await fs.writeFile("Readme.md","Varun Chauhan best ")

    // 5 read files 
    // const data=await fs.readFile("Readme.md","utf-8")
    // console.log(data)

    // 6. append in file 
    // await fs.appendFile("Readme.md", "varun chauhan")

    // 7.Copy file 
    // await fs.copyFile("Readme.md","info.txt")

    // 8. Get File Information 
    // const info = await fs.stat("info.txt")
    // console.log(info)
 
    console.log("done")
}catch(err){
    console.log(err)
}