import React from 'react'
import {motion} from "framer-motion"
const Box1 = () => {
    const data=["Varun Chauhan","Ojit Chauhan","Niketa Chauhan","Nikku Chauhan","Pindu Chauhan"]
    const parent={
        h:{},
        v:{
            transition:{
                staggerChildren:0.4,
          
            }
        }
    }
    const child={
        h:{opacity:0,scale:0.6,x:"-100%"},
        v:{opacity:1,scale:1,x:"0%"}
    }
  return (
    <div className='p-2 flex flex-col gap-4 justify-center items-center'>
        <motion.ul variants={parent} initial={"h"} animate={"v"} >
            {data.map((item,index)=>(
                <motion.li className='list-none p-2 text-2xl font-bold font-mono text-black bg-yellow-500 mb-2 mt-2' key={index} variants={child}
                transition={{type:"spring",stiffness:500}}
                >{item}</motion.li>
            ))}
        </motion.ul>
    </div>
  )
}

export default Box1