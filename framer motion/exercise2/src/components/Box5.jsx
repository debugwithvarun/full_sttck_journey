import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"

const Box5 = () => {
    const [show,setShow]=useState(false)
    console.log(show)
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        
        <motion.button className='px-4 py-2 bg-yellow-500 hover:bg-yellow-200 rounded-xl font-bold text-xl'
        whileTap={{scale:0.8}}
        transition={{duration:0.2,type:"spring",stiffness:500}}
        onClick={()=>{
            setShow(true)
            setTimeout(()=>setShow(false),3000)
        }}
        >Click Me!</motion.button>

        <AnimatePresence>
                {show && <motion.div className='p-4 bg-blue-400 text-white text-xl font-500 fixed top-2 right-2 shadow-sm shadow-[grey]'
        variants={{
            hidden:{opacity:0,x:200},
            visible:{opacity:1,x:0},
            exit:{opacity:0,x:200}
        }}
        initial={"hidden"}
        animate={show?"visible":"hidden"}
        exit={"exit"}
        transition={{duration:0.8,ease:"easeInOut"}}
        >This is Notification for you!</motion.div>}

        </AnimatePresence>
    </div>
  )
}

export default Box5