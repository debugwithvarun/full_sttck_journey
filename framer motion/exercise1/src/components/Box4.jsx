import React, { useState } from 'react'
import {motion} from "framer-motion"
const Box4 = () => {
    const[shape,setShape]=useState(false)

    
  return (
     <motion.div className='h-[200px] w-[400px] bg-green-400'
     onClick={()=>setShape(!shape)}
    variants={{
        hidden:{skew:0},
        visible:{skew:-20}
    }}
    initial={"hidden"}
    animate={shape?"visible":"hidden"}
    transition={{duration:1}}
    />
  )
}

export default Box4