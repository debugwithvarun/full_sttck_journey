import React from 'react'
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion"
const Example2 = () => {
    const {scrollY} =useScroll()

    useMotionValueEvent(scrollY,"change",(l)=>{
        console.log("value change to ",l)
    })

    const opacity=useTransform(scrollY,[0,300],[1,0])
    const scale=useTransform(scrollY,[0,300],[1,1.5])

  return (
    <div>
        <motion.div className='p-4 w-[100px] h-[200px] bg-blue-400 rounded-2xl mt-[200px]'
        
        style={{opacity,scale}}></motion.div>
    <p className="h-screen"></p>
    </div>
  )
}

export default Example2