import React, { useState } from 'react'
import {motion} from "framer-motion"

const Box6 = () => {
  const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://static.toiimg.com/thumb/114423393/114423393.jpg?height=746&width=420&resizemode=76&imgsize=199280",
];
const [ind,setInd]=useState(0)
  return (
    <div className='p-2 flex '>
      <motion.img src={`${images[ind]}`} alt="" className='h-[300px] w-[250px] justify-center items-center '
      drag ="y"
      dragConstraints={{top:0,bottom:0}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      onDragEnd={(_,info)=>{
        if(info.offset.y>100){
          setInd((prev)=>(prev-1+images.length)%images.length)
        }
        else if(info.offset.y<-100){
          setInd((prev)=>(prev+1)%images.length)
        }
      }}
      transition={{duration:0.6,ease:"easeInOut"}}
      />
    </div>
  )
}

export default Box6