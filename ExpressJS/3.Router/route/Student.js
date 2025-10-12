import express from "express"
import {getStudent,postStudent,putStudent,deleteStudent} from "../controllers/student.js"
const router = express.Router()

router.get("/student",getStudent)
router.post("/student",postStudent)
router.put("/student",putStudent)
router.delete("/student",deleteStudent)


router.get("/hello",(req,res)=>{
    res.send("hello")

})
export default router