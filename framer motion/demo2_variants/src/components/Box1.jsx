import React from 'react'
import {motion} from "motion/react"
const Box1 = () => {

  return (
    <motion.div className='w-[100px] h-[100px] bg-pink-600 border-2 border-blue-400 p-8 rounded-full fixed left-[100px]'
    variants={{
        hidden:{opacity:0,scale:0.8},
        visible:{opacity:1,scale:1},
        exit:{opacity:0,scale:0.5},
        
    }}
    initial="hidden"
    animate="visible"
    exit={"exit"}
    transition={{duration:1,repeat:Infinity,repeatType:"mirror"}}
    />
  )
}

export default Box1