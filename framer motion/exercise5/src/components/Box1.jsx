import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react'
const Box1 = () => {
  const[act,setAct]=useState(false)
  return (
    <motion.div className={`w-[300px] h-[200px] bg-blue-400 rounded-xl flex justify-center items-center font-bold text-3xl uppercase ${act?"hidden":""}`}
    drag="x"
    dragConstraints={{
      left:-100,right:100
    }}
    onDragEnd={(_,info)=>{
      if(info.offset.x>100 || info.offset.x<-100 ){
        setAct(true)
      }
    }}
    >drage Me!</motion.div>
  )
}

export default Box1