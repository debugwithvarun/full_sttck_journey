import React from 'react'
import {motion} from "framer-motion"

const Box3 = () => {
  return (
    <motion.div className='grid grid-cols-3 gap-4'
    variants={{v:{
      transition:{
        staggerChildren:0.6
      }
    }}}
    initial={"h"}
    animate={"v"}
    >
      {[...Array(6)].map((_,index)=>(
        <motion.div className='p-4 rounded-xl shadow-black shadow-xl w-15 h-15 bg-white' key={index}
        variants={{
          h:{opacity:0,scale:0.6},
          v:{opacity:1,scale:1}
        }}
        />
      ))}
    </motion.div>
  )
}

export default Box3