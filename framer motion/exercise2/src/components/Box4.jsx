import React, { useState } from 'react'
import {motion} from "framer-motion"

const Box4 = () => {
  const [i,setI]=useState(null)
 

  return (
    <div className='w-full min-h-screen p-10 bg-[#1c1c1c] flex flex-col items-center justify-center gap-10'>
        {
          [...Array(4)].map((item,index)=>(
            <div className=' w-[700px] p-4 font-mono flex flex-col  bg-white shadow-lg shadow-blue-900 '>
              <div className='flex w-full justify-between '>
                <h1 className='text-2xl font-bold'>title-{index}</h1>
                <h1 className='text-2xl font-bold mr-[30px] cursor-pointer' onClick={()=>{
                  if(i===index){
                    setI(null)
                  }
                  else{
                    setI(index)
                  }
                }}>{index===i?"-":"+"}</h1>
              </div>

              <motion.div className="text-wrap overflow-hidden"
              initial={{height:"0px"}}
              animate={{height:i===index?"auto":"0px"}}
              exit={{height:"0px"}}
              transition={{duration:0.5,ease:"easeInOut"}}
              >
                <p className='text-wrap p-2'>
                  This is the random content for the title-{index}
                This is the random content for the title-{index}
                This is the random content for the title-{index}
                </p>
              </motion.div>

            </div>
          ))
        }        

    </div>
  )
}

export default Box4