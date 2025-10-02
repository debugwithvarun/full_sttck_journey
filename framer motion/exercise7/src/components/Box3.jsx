import React from 'react'
import {motion,useSpring} from "framer-motion"

const Box3 = () => {
  const x=useSpring(0)
  const y=useSpring(0)
  return (
 <motion.div className='p-10 w-[100px] h-[100px] bg-yellow-500'
 style={{x,y}}
 onClick={()=>{
  x.set(Math.random()*300)
  y.set(Math.random()*300)
 }}
 ></motion.div>
  )
}

export default Box3