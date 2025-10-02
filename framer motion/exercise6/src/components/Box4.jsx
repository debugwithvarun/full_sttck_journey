import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  const data = [
    "Varun Chauhan",
    "Ojit Chauhan",
    "Niketa Chauhan",
    "Nikku Chauhan",
    "Pindu Chauhan",
  ];

  return (<div className="p-4 flex flex-col gap-4">
    {
      data.map((name,nameindex)=>(
        <motion.li key={nameindex} className="bg-yellow-500 text-black text-xl font-bold font-mono p-2 mb-3 mt-3 list-none tracking-widest"
        variants={{
          visible:{
            transition:{
              staggerChildren:0.6
            }
          }
        }}
        initial="hidden"
        animate="visible"
        >
       { [...name].map((item,index)=>(
            <motion.span key={index}
            variants={{
              hidden:{opacity:0},
              visible:{opacity:1}
            }}
            >{item}</motion.span>
        ))}
          </motion.li>
      ))
    }
  </div>);
};

export default Box4;
