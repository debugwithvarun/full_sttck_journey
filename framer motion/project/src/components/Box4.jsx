import React, { useState } from "react";
import { motion } from "framer-motion";
const Box4 = () => {
  const images = [
    "https://images.unsplash.com/photo-1516905041604-7935af78f572?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516906571665-49af58989c4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1525548002014-e18135d814d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(3);
  const[ishover,setIsHover]=useState(false)


  const prev=()=>{
    const newIndex=(currentIndex-1+images.length)%images.length
    setCurrentIndex(newIndex)
  }
  
  const next=()=>{
    const newIndex=(currentIndex+1)%images.length
    setCurrentIndex(newIndex)

  }
  return (
    <div className="w-[60vw] h-[70vh] relative overflow-hidden flex">
   
        {images.map((item, index) => (
          <motion.img
            initial={{ x: "-100%" }}
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ duration: 1 }}
            src={item}
            alt={index}
            className="min-w-full min-h-full object-center"
     
          />
        ))}

        <div className={`p-4 w-[60vw] h-[20vh] bg-[rgba(255,255,255,0.15)] absolute bottom-0 flex justify-center items-center gap-10 ${ishover?"opacity:1":"opacity-0"}`}
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        >
          {
            images.map((pix,i)=>(
              <motion.img src={pix} alt={`pic-${i}`} className={`h-[80%] relative z-10 border-2 ${currentIndex===i?"border-blue-500":"border-blue-500/[30%]"} cursor-pointer`}
              initial={{scale:1}}
              whileHover={{scale:1.05}}
              transition={{duration0:0.6}}
                     onClick={()=>{
              setCurrentIndex(i)
            }}
              />
            ))
          }

        </div>

        <div className={`absolute left-4 top-[47%] text-3xl text-white font-bold flex justify-center items-center ${ishover?"opacity-[0.3]":"opacity-0"} cursor-pointer`}
          onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        onClick={()=>prev()}
        >{'<'}</div>
        <div className={`absolute right-4 top-[47%] text-3xl text-white font-bold flex justify-center items-center ${ishover?"opacity-[0.3]":"opacity-0"} cursor-pointer`}
          onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        onClick={()=>next()}
        >{'>'}</div>
     
    </div>
  );
};

export default Box4;
