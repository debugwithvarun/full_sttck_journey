import React from 'react'
import {motion} from "framer-motion"
const Box4 = () => {
  return (
    <motion.div className='grid grid-cols-3 gap-10'
    initial={"h"}
    whileInView={"v"}
    transition={{staggerChildren:0.05}}
    >
      {
        [...Array(6)].map((_,i)=>(
          <motion.div key={i}
          className='h-[200px] w-[150px] bg-yellow-500 flex justify-center items-center font-extrabold text-2xl'
          variants={{
            h:{scale:0.6,backgroundColor:"#FFFF00",color:"#000"},
            v:{scale:1,backgroundColor:"#8b5cf6",color:"#fff"}
          }}
          transition={{type:"spring",duration:1,stiffness:300}}
          whileHover={{scale:1.2,color:"#000",backgroundColor:"#ffff00"}}
          >Card {i}</motion.div>
        ))
      }
    </motion.div>
  )
}

export default Box4