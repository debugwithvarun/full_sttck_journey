import React from 'react'
import {motion} from "framer-motion"

const Box4 = () => {
  return (
    <motion.h1 className='p-4 text-6xl font-bold text-white uppercase'
    initial={{x:"-200%",opacity:0}}
    animate={{opacity:1,x:"0%"}}
    transition={{duration:1,ease:"easeInOut"}}
    >
        This is Slide TEXT
    </motion.h1>
  )
}

export default Box4