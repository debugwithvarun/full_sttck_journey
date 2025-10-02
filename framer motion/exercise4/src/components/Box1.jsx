import React from 'react'
import {motion} from "framer-motion"
const Box1 = () => {
  return (
    <motion.div className='h-[150px] w-[150px] bg-purple-500 rounded-2xl'
    variants={{
        h:{opacity:0}
        ,
        v:{opacity:1}
    }}
    initial={"h"}
    animate={"v"}
    transition={{duration:1,ease:"easeIn"}}
    >

    </motion.div>
  )
}

export default Box1