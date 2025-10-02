import React from 'react'
import {motion} from "framer-motion"

const Box3 = () => {
  return (
    <motion.div className='p-4 flex justify-center items-center w-[200px] h-[100px]'
    initial={{backgroundColor:"#9ef528"}}
    animate={{backgroundColor:["#9ef528","#ffe800","#0070ff","#ec00ff","#ff0000"]}}
    transition={{duration:2,repeat:Infinity,repeatType:"loop"}}
    >Box1</motion.div>
  )
}

export default Box3