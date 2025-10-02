import React from 'react'
import {motion} from "framer-motion"
const Box2 = () => {
  return (
    <motion.div className='w-[200px] h-[200px] rounded-full border-15 border-yellow-600 border-b-transparent'
    animate={{rotate:360}}
    transition={{duration:1,repeat:Infinity,ease:"linear"}}
    >
        <motion.div className='w-full h-full border-15 border-yellow-300 rounded-full  '
        initial={{rotate:0}}
        // animate={{opacity:[1,0.5,1],rotate:-720}}
        transition={{duration:1,repeat:Infinity,ease:"linear"}}
        
        />

    </motion.div>
  )
}

export default Box2