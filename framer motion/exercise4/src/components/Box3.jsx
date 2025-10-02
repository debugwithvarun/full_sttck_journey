import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react'


const Box3 = () => {
   const[show,setShow]=useState(false)
   console.log(show)
  return (
    <div className='h-seen w-full flex justify-center items-center flex-col'>
        <button className='px-6 py-3 bg-rose-400 hover:bg-rose-300 cursor-pointer z-10'
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}
        >Hover Me!</button>
        <AnimatePresence>
                    <motion.div className='p-4 w-[200px] bg-white absolute border-3 border-green-500 rounded-3xl'
        variants={{
            h:{x:0,y:0,opacity:0},
            v:{x:120,y:120,opacity:1},
            e:{x:0,y:0,opacity:0},
        }}
        initial={"h"}
        animate={show?"v":"h"}
        exit={"e"}
        transition={{duration:0.2,ease:"easeIn"}}
        > <b className='border-b-3 border-red-500 mb-4 block w-[140px]'>This is the Tool tip</b> 

        This have inormatin aout the fuctnality the function , in which you hover your mouse!.</motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Box3