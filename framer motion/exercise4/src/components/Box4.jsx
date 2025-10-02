import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react'

const Box4 = () => {
  const[on,setOn] = useState(false)
  const button_variants={
    h:{x:"0%",backgroundColor:"#ababab"},
    v:{x:"115%",backgroundColor:"#56b200"}
  }
  return (
    <div className='relative w-[200px] h-[100px] bg-zinc-300 rounded-full flex justify-start items-center p-2'>

    <motion.div className='h-full aspect-square rounded-full bg-zinc-400 cursor-pointer' onClick={()=>setOn(!on)}
        variants={button_variants}
        initial={"h"}
        animate={on?"v":"h"}
        transition={{duration:0.5,ease:"easeIn"}}
        />
    </div>
  )
}

export default Box4