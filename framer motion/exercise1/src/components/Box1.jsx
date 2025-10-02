import React from 'react'
import {motion} from "framer-motion"
const Box1 = () => {
  return (
    <motion.div className='h-[200px] w-[200px] bg-blue-400'
    initial={{x:0,scale:0.4,opacity:0.3}}
    animate={{x:1000,scale:1,opacity:1}}
    transition={{duration:0.8,repeat:Infinity}}
    />
  )
}

export default Box1