import React from 'react'
import {motion} from "motion/react"
const Box5 = () => {
  return (
    <motion.button 
    className='p-3 bg-blue-500 fixed right-20'
    animate={{
        scale:[1,1.2,1,1.2,1],
        backgroundColor:["#3b82f6","#1c1c1c","#8bc2cf","#ffc0cb"],
        color:["#3b82f6","#1c1c1c","#8bc2cf","#ffc0cb"].reverse()
    }}
    transition={{repeat:Infinity,duration:2,repeatType:"reverse",ease:"anticipate"}}
>Click ME!</motion.button>
  )
}

export default Box5