import React from 'react'
import {motion} from "framer-motion"

const Box2 = ({show,setShow}) => {
  return (
    <motion.div
    className='w-[200px] h-[100vh] bg-white shadow-lg  flex justify-end p-4 text-xl font-bold fixed top-0 '
    variants={{
        hidden:{x:-300,opacity:0},
        visible:{x:0,opacity:1}
    }}
    initial={"hidden"}
    animate={show?"visible":"hidden"}
    transition={{duration:0.3,type:"easeInOut"}}
    >
        <span className='p-2 text-lg cursor-pointer' onClick={()=>setShow(!show)}>❌</span>

    </motion.div>
  )
}

export default Box2;