import React from 'react'
import {motion} from "framer-motion"
const Box1 = () => {
  return (
    <motion.div className='p-4 flex justify-center items-center w-[60px] h-[60px] rounded-full bg-yellow-500 '
    animate={{y:[0,-100,0]}}
    transition={{duration:1,repeat:Infinity,repeatType:"loop"}}
    >Box1</motion.div>
  )
}

export default Box1