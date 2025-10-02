import React from 'react'
import {motion} from "motion/react"

const Box3 = () => {
  return (
       <motion.div
     className="w-[200px] h-[200px] bg-amber-600 border-4 border-white fixed top-10 "
     initial={{scale:0.2}}
     animate={{rotate:360,scale:[0,0.1,0.2,0.4,0.6,0.8,1],}}
     transition={{duration:1,repeat:Infinity,repeatType:"reverse"}}
     />
  )
}

export default Box3