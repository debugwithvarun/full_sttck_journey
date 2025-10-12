import * as fs from "fs"


    // 1 create directory 
    // fs.mkdirSync(  "D:\\tryjs\\a.txt",{recursive:true})
    // fs.mkdirSync(  "D:\\tryjs\\c.txt",{recursive:true})
    //  fs.mkdirSync(  "D:\\tryjs\\b.txt",{recursive:true})

    // 2. remove directory 
    // fs.rmdirSync("D:\\tryjs\\a.txt")
    // fs.rmdirSync("D:\\tryjs")

    // 3. Read directory 
    // const files =fs.readdirSync("D:\\tryjs")
    // for (const f of files){
    //         console.log(f)
    // }


    // 4 . create and write files 
    // fs.writeFileSync("Readme.md","Varun Chauhan best ")

    // 5 read files 
    // const data=fs.readFileSync("Readme.md","utf-8")
    // console.log(data)

    // 6. append in file 
    // fs.appendFileSync("Readme.md", "varun chauhan")

    // 7.Copy file 
    // fs.copyFileSync("Readme.md","info.txt")

    // 8. Get File Information 
    // const info = fs.statSync("info.txt")
    // console.log(info)
 
    console.log("done")
