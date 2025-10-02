import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react'

const Box2 = () => {
 const[show,setShow]=useState(false)
 const sidebar={
    hidden:{x:"-100%",opacity:0},
    visible:{x:"0%",opacity:1},
    exit:{x:"-100%",opacity:0}
 }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <motion.div className='w-[300px] h-screen bg-purple-300 p-4 flex justify-center items-center text-2xl font-bold uppercase fixed top-0 left-0'
        variants={sidebar}
        initial={"hidden"}
        animate={show?"visible":"hidden"}
        exit={"exit"}
        transition={{duration:1,ease:"easeInOut"}}
        >
            This is SideBar
        </motion.div>

        <button className='px-6 py-3 bg-blue-500 hover:bg-blue-200 rounded-xl font-bold'
        onClick={()=>setShow(!show)}
        >Click ME</button>

    </div>
  )
}

export default Box2