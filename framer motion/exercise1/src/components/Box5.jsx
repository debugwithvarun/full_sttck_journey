import React from 'react'
import {motion} from "framer-motion"
const Box5 = () => {
  return (
   <div className='flex flex-col gap-4'>
    {
        [...Array(5)].map((_,index)=>(
                <motion.div className='h-[100px] w-[100px] bg-red-600 rounded-xl'
    initial={{x:-1000,scale:1,opacity:1,display:"none"}}
    animate={{x:500,scale:1,backgroundColor:["#9cff33","#ff00a2","#00fbff"],opacity:1,display:"flex"}}
    transition={{duration:1,ease:"easeInOut",delay:0.1*index}}
    />
        ))
    }
   </div>
  )
}

export default Box5