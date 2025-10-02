import React from 'react'
import {motion} from "framer-motion"
const Box2 = () => {
  return (
    <motion.div className='h-[200px] w-[200px] bg-red-600 rounded-full'
    initial={{y:0}}
    animate={{y:[0,-100,0]}}
    transition={{duration:1,repeat:Infinity,ease:"easeInOut"}}
    />
  )
}

export default Box2