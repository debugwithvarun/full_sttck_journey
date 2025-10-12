
const getStudent=(req,res)=>{
    res.send("Get Method")
}
const postStudent=(req,res)=>{
    res.send("Post Method")
}
const putStudent=(req,res)=>{
    res.send("Put Method")
}
const deleteStudent=(req,res)=>{
    res.send("Delete Method")
}

export {getStudent,postStudent,putStudent,deleteStudent};