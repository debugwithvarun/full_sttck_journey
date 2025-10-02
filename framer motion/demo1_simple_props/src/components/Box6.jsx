import React from 'react'
import {motion} from "motion/react"
const Box6 = () => {
    const bgColor=["0000FF","#FFFF00","#FF0000","#00FF00"]
  return (
    <div className='flex justify-center items-center gap-2 p-4 fixed bottom-3 right-7'>

        {
            [[...Array(4)].map((_,index)=>(
                <motion.span
                className='w-4 h-4 bg-[#ff00c8] rounded-full p-10' 
         
                animate={{
                    y:[0,-30,0,30,0,-30,0]
                    
                  

                }}
                transition={{
                    duration:1,
                    type:"keyframes",
                    ease:"linear",
                    repeat:Infinity,
                    delay:0.1*index
                }}
                />
            ))]
        }

    </div>
  )
}

export default Box6