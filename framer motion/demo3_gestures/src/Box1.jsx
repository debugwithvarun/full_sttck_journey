import React from 'react'
import {motion} from "motion/react"
const Box1 = () => {
  return (
    <motion.div
    className='w-[100px] h-[100px] bg-red-400 flex justify-center items-center text-2xl font-extrabold rounded-2xl left-[60px] fixed'
    whileHover={{scale:1.1,backgroundColor:"yellow"}}
    drag
    dragConstraints={{
        left:-50,right:50,top:-50,bottom:50
    }}
    whileTap={{scale:0.8,backgroundColor:"blue"}}
    transition={{type:"spring", stiffness:300}}
    >
        Box1
        </motion.div>
  )
}

export default Box1