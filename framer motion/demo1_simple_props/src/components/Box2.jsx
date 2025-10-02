import React from 'react'
import {motion} from "motion/react"
const Box2 = () => {
  return (
        <motion.div
     className="w-[200px] h-[200px] bg-amber-600 border-4 border-white fixed left-2"
     initial={{x:0,y:0,scale:0.2}}
     animate={{x:[0,200,200,0,0],y:[0,0,200,200,0],scale:1}}
     transition={{duration:3,repeat:Infinity,repeatType:"reverse",ease:"circIn"}}
     />
  )
}

export default Box2