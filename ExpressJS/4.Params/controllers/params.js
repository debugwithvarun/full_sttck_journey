const a=(req,res)=>{
    res.send(`id := ${req.params.id}`)
}
const b=(req,res)=>{
    res.send(`id := ${req.params.id} & module := ${req.params.module}`)
}

export {a,b}