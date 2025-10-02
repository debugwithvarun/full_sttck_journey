import React from 'react'
import {motion} from "framer-motion"

const Box2 = () => {
  return (
    <motion.div className='p-4 flex justify-center items-center w-[60px] h-[60px] rounded-full bg-yellow-500 '
    animate={{scale:[0.7,1,0.7]}}
    transition={{duration:1,repeat:Infinity,repeatType:"loop"}}
    >Box1</motion.div>
  )
}

export default Box2