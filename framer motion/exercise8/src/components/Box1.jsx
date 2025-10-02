import React from "react";
import { motion } from "framer-motion";
const Box1 = () => {
  const data = [
    "Varun Chauhan",
    "Ojit Chauhan",
    "Niketa Chauhan",
    "Nikku Chauhan",
    "shaziya Chauhan",
    "Pindu Chauhan",
  ];

  return( 
  <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#1c1c1c]">
    <div className="h-[120vh] bg-[#1c1c1c]"></div>
    <motion.ul className="p-4 list-none flex flex-col gap-5"
    variants={{
      h:{},
      v:{transition:{
        staggerChildren:0.3
      }}
    }}
    initial={"h"}
    whileInView={"v"}
    // whileInView={{opacity:1}}
    >
        {
            data.map((item,index)=>(
                <motion.li key={index} className="p-4 bg-yellow-500"
                // initial={{opacity:0,y:50}}
                // whileInView={{opacity:1,y:0}}
                // transition={{duration:1}}
                variants={{
                  h:{opacity:0,y:40},
                  v:{opacity:1,y:0},
                }}
                >{item}</motion.li>
            ))
        }
    </motion.ul>
    <div className="h-[120vh] bg-[#1c1c1c]"></div>


  </div>
  );
};

export default Box1;
