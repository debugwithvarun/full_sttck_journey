import React from 'react'
import {motion} from "framer-motion"
const Box3 = () => {
  return (
    <motion.img src="https://pnghq.com/wp-content/uploads/download-theatrical-america-gray-mjolnir-hammer-thor-property-hq-png-image-26671-400x400.png" 

    className='h-[200px] w-[200px]'
    variants={{
        hidden:{rotate:0},
        visible:{rotate:360},
        
        
    }}

    initial={"hidden"}
    animate={"visible"}
    transition={{duration:2,repeat:Infinity}}
    />
  )
}

export default Box3