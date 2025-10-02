import React from 'react'
import {motion} from "framer-motion"

const Box5 = () => {
  return (
            <motion.div className='p-4 flex justify-center items-center w-[100px] h-[100px] bg-teal-200 rounded-xl'
    initial={{x:0,y:0}}
    // animate={{x:[0,150,0,-150,0],y:[0,150,0,150,0]}}
    animate={{x:[-150,0,150,300,450],y:[150,0,150,0,150]}}
    transition={{duration:1,repeat:Infinity,repeatType:"loop"}}
    >Box5</motion.div>
 
  )
}

export default Box5