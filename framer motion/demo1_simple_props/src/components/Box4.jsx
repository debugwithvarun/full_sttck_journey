import React from 'react'
import {motion} from "motion/react"
const Box4 = () => {
  return (
        <motion.div
     className="w-[200px] h-[200px] bg-pink-600 border-4 border-white fixed top-3 right-6"
     initial={{scale:0.2}}
     animate={{
        scale:[0.2,1,0.2,1],
      //   rotate:[0,0,270,270,0],
        borderRadius:["20%","20%","50%","50%","20%"]
    }}
     transition={{duration:5,repeat:Infinity,repeatType:"reverse"}}
     />
  )
}

export default Box4