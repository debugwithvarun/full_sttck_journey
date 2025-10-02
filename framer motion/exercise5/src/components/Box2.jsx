import React from 'react'
import {motion} from "framer-motion"

const Box2 = () => {
  return (
    <motion.div className='p-4 w-[150px] h-[150px] bg-yellow-500 rounded-xl text-2xl flex justify-center items-center'
    drag
    dragConstraints={{
      left:10,right:10,top:10,bottom:10
    }}
    >Box2</motion.div>
  )
}

export default Box2