import React from 'react'
import {motion} from "framer-motion"
const Box7 = () => {
  return (
    <motion.div className='p-4 flex justify-center items-center w-full h-screen text-9xl font-extrabold text-white'
    initial={{backgroundColor:"#9ef528"}}
    animate={{backgroundColor:["#9ef528","#ffe800","#0070ff","#ec00ff","#ff0000"],color:["#ff0000","#ec00ff","#0070ff","#ffe800","#9ef528"]}}
    transition={{duration:2,repeat:Infinity,repeatType:"loop"}}
    >Varun Chauhan</motion.div>
  )
}

export default Box7