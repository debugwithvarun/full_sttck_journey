import React, { useState } from 'react'
import {motion} from "framer-motion"
const Box7 = () => {
  const steps=[
    {title:"Step 1",description:"This is Step 1 Part"},
    {title:"Step 2",description:"This is Step 2 Part"},
    {title:"Step 3",description:"This is Step 3 Part"},
    {title:"Step 4",description:"This is Step 4 Part"},
  ]
  const[current ,setCurrent]=useState(2)
  const prev=()=>{
    setCurrent(current-1)
  }
  const next=()=>{
    setCurrent(current+1)
  }
  return (
    <div className='flex flex-col gap-3 w-[50vw]'>

      <div className='relative flex justify-between items-center'>

     <hr className='absolute h-3 bg-yellow-500 text-yellow-500 top-6'
        style={{
            width: `${((current + 0) / steps.length) * 130}%`,
            transition: "width 0.3s ease",
          }}
     />
        
            {
              steps.map((item,index)=>(
                <div className='flex flex-col gap-3 w-[60px] relative'>
                   <div className={`rounded-full w-full h-[60px] border-3 border-white ${index<=current?"bg-yellow-500":"bg-white"} p-4`}>
                  {index<current?"✔️":""}

                   </div>
           <span className='text-lg text-zinc-500 '>{item.title}</span>
                </div>
              ))
            }
       

      </div>

      <motion.div className='bg-transparent border-2 border-white text-white font-mono flex flex-col justify-center items-center pt-18 pb-18 rounded-2xl'
      key={current}
      initial={{y:-20}}
      animate={{y:0}}
      transition={{duration:0.3}}
      >
        <h1 className='text-3xl text-white font-bold'>{steps[current].title}</h1>
        <p className='text-xl text-white'>{steps[current].description}</p>
      </motion.div>

      <div className='w-full flex gap-4 p-4 justify-center items-center'>
        <motion.button className={`py-3 px-2 bg-yellow-500 rounded-lg w-[80px] text-xl font-bold font-mono cursor-pointer ${current===0?"opacity-[0.6]":""}`}
        whileHover={{scale:1.1}}
        onClick={()=>prev()}
        disabled={current===0}
        >Prev</motion.button>
        <motion.button className={`py-3 px-2 bg-yellow-500 rounded-lg w-[80px] text-xl font-bold font-mono cursor-pointer ${current===(steps.length-1)?"opacity-[0.6]":""}`}
        whileHover={{scale:1.1}}
        onClick={()=>next()}
        disabled={current===(steps.length-1)}
        >Next</motion.button>
      </div>

    </div>
  )
}

export default Box7