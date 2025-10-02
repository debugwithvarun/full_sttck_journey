import React, { useState } from 'react'
import {motion} from "framer-motion"

const Box5 = () => {
  const [large,setLarge]=useState(false)
  return (
      <motion.div
        className={`p-4 w-[150px] h-[150px] rounded-xl text-2xl flex justify-center items-center bg-pink-400 text-white font-extrabold`}
        onTapStart={()=>setLarge(true)}
        transition={{duration:0.5,ease:"easeInOut"}}
        // onTap={()=>setLarge(tr)}
        animate={{scale:large?1.4:1}}
        exit={{scale:1}}
        onTapCancel={()=>setLarge(false)}
        onTap={()=>setLarge(false)}
      >
        Box5
      </motion.div>
  )
}

export default Box5