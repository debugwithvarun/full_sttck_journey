export const a=(req,res)=>{
    const id=req.query.id
    const company=req.query.company
    const imodel=req.query.imodel
    res.send(`${id} and ${company} and ${imodel}`)
    console.log(`${id} and ${company} and ${imodel}`)
}