import React from 'react'
import {motion,useMotionValue,useMotionValueEvent} from "framer-motion"
import { useState } from 'react'
const Box1 = () => {
  const x=useMotionValue(0)
  const y=useMotionValue(0)
  const[a,setA]=useState(0)
  const[b,setB]=useState(0)
  
    useMotionValueEvent(x,"change",(l)=>x.set(l))
    console.log(x,y)
  return (
   <div className="w-full h-screen flex justify-center items-center ">
    <motion.div className="p-4 h-[100px] w-[100px] bg-white rounded-xl" style={{x,y}} drag
    onDrag={()=>{
      setA(x.get())
      setB(y.get())
    }}
    />

    <p className="fixed top-0 text-2xl font-bold font-mono text-yellow-500">
        X = {a} <br />
        Y = {b}
    </p>
   </div>
  )
}

export default Box1