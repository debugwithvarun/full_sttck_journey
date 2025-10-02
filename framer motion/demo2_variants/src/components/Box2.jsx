import React, { useState } from 'react'
import {motion} from "motion/react"

const Box2 = () => {
    const[side,setSide]=useState("front")
  return (
    <motion.div 
    onClick={()=>setSide(side==="back"?"front":"back")}
    className='w-[200px] h-[100px] bg-teal-300 text-xl text-amber-800  flex justify-center items-center uppercase font-bold '
    variants={{
        front:{rotateY:0},
        back:{rotateY:180},
        
    }}
    initial={"front"}
    animate={side==="front"?"front":"back"}
    transition={{duration:0.5,ease:"easeInOut"}}

    >
        {side} side
    </motion.div>
  )
}

export default Box2