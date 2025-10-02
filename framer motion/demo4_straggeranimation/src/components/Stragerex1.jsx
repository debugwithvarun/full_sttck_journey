import React from 'react'
import { motion } from "framer-motion"
const Stragerex1 = () => {
    const parentVar={
        hidden:{opacity:0},
        visible:{
            opacity:1,
            transition:{staggerChildren:0.8}
        }
    }
    const childVar={
        hidden:{opacity:0,x:-20},
        visible:{
            opacity:1,x:20
        }
    }
  return (
    <motion.div className='flex justify-center items-center flex-col gap-2  w-[100px]'  variants={parentVar} initial={"hidden"} animate={"visible"}>
        {
            [...Array(5)].map((item,index)=>(
                <motion.div className='p-4 w-[40px] h-[40px] rounded-full bg-teal-200 flex justify-center items-center font-extrabold text-xl'
                variants={childVar}
                key={index}
                >
                        {index+1}
                </motion.div>

            ))
        }
    </motion.div>
  )
}

export default Stragerex1