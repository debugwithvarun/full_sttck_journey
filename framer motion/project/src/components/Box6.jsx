import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion"

const Box6 = () => {
  const cards = [
  {
    url: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=3867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=3841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

 const {scrollYProgress}=useScroll()
 const x=useTransform(scrollYProgress,[0,1],["30%","-330%"])
  return (
    <div className='h-[300vh] relative '>
          <div className='h-screen overflow-hidden sticky top-10 flex items-center'>
      <div className='flex gap-4'>
      {
        cards.map((item,index)=>(
          <motion.div className='w-[350px] h-[400px] border-2 border-white overflow-hidden' key={index}
          style={{
            x
          }}
          >
            <motion.img src={item.url} alt={"item"+index} className='w-full h-full object-center'
            whileHover={{scale:1.1}}
            transition={{duration:0.3}}
            />
          </motion.div>
        ))
      }
      </div>

    </div>
    </div>
  )
}

export default Box6