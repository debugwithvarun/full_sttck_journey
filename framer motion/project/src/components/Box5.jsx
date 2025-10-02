import React, { useState } from 'react'
import {motion} from "framer-motion"
const Box5 = () => {
  const [show,setShow]=useState(false)
  return (
    <div className='w-full h-screen relative flex justify-center items-center'>
      <motion.div className='w-[300px] h-screen p-4 bg-white text-2xl font-bold fixed top-0 left-0 '
      initial={{x:"-100%"}}
      animate={{x:show?"0%":"-100%"}}
      transition={{duration:1}}
      
      
      >

        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
         <h1 onClick={()=>{setShow(!show)}}
        className='text-3xl font-fold text-red-500 absolute top-4 right-4'
        >X</h1>
      </motion.div>

      <h1 onClick={()=>{setShow(!show)}}
        className='text-3xl font-fold text-white'
        >{show?"Open":"Close"}</h1>
    </div>
  )
}

export default Box5