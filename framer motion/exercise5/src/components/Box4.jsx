import React, { useState } from 'react'
import {motion} from "framer-motion"

const Box4 = () => {
  const bgcolor=["bg-yellow-500","bg-rose-500","bg-blue-500","bg-pink-500","bg-violet-500","bg-green-500","bg-yellow-500"]
  const[bg,setBg]=useState(0)

  return (
      <motion.div
        className={`p-4 w-[150px] h-[150px] rounded-xl text-2xl flex justify-center items-center ${bgcolor[bg]}`}
        // initial={{backgroundColor:"#CBCBCB"}}
        // whileTap={{}}
        transition={{duration:0.5,ease:"easeInOut"}}
        onTap={()=>setBg((prev)=>(prev+1)%bgcolor.length)}
      >
        Box4
      </motion.div>
  )
}

export default Box4