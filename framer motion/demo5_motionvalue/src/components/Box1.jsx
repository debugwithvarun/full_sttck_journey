import React from 'react'
import {motion,useMotionValue,useMotionValueEvent,useSpring,useTransform} from "framer-motion"
const Box1 = () => {
    // const scale=useMotionValue(1)
    const scale=useSpring(1)
    const bk=useTransform(scale,[0.1,2],["#1c1c1c","#2fe1cc"])

    useMotionValueEvent(scale,"animationStart",()=>{
        console.log("animation start")
    })

    useMotionValueEvent(scale,"change" ,(latest)=>{
        console.log("value change to ",latest)
    })
  return (
    <div className='flex justify-center flex-col items-center gap-10'>
            <motion.div className='w-[100px] h-[100px] bg-yellow-400 p-4 rounded-full border-6 border-red-500'
    style={{scale,backgroundColor:bk}}
    >
     
    </motion.div>
    <input type="range" className='accent-green-500' min={0.1} step={0.1} max={2} onChange={(e)=>{
        scale.set(parseFloat(e.target.value))
    }}/>
    </div>
  )
}

export default Box1