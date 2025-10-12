import express from "express"

import {a,b} from "../controllers/params.js"

const router = express.Router()


router.param("id", (req, res, next, id) => {
    console.log("id", id)
    next()
})

router.param("module", (req, res, next, module) => {
    console.log("module", module)
    next()
})
router.get("/product/:id",a)
router.get("/product/:id/:module",b)

export default router