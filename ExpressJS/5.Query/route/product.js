import express from "express"

import {a} from "../controlles/product.js"

const route = express.Router()

route.get("/product",a)

export default route;