import React from 'react'
import {motion} from "framer-motion"
const Example1 = () => {
  return (
    <motion.div className='w-[300px] p-[20px] flex flex-col justify-center items-center rounded-xl bg-white text-center  duration-600'
    whileHover={{
        backgroundColor:"blue",
        color:"white",
        scale:1.1,
    
    }}
    initial={{
        scale:0.5,opacity:0,backgroundColor:"white"
    }}

    whileInView={{
        scale:1.1,
        opacity:1,
        y:-200,
     

    }}

    transition={{
        duration:0.5,
        type:"spring",
        ease:"anticipate"
    }}
    >
        <h1 className='font-bold text-xl mb-4'>Amazing Card</h1>
        <p>This is Amazing Card and it will animate when came in View Port</p>

    </motion.div>
  )
}

export default Example1