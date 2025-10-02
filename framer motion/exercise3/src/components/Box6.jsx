import React from "react";
import { motion } from "framer-motion";
const Box6 = () => {
  return (
    <div className="p-4 flex gap-3">
      {[...Array(5)].map((item, index) => (
        <motion.div className="p-8 bg-yellow-400 border-4 border-[green] rounded-full"  
        initial={{y:0}}
        animate={{y:[0,-60,0]}}
        transition={{duration:1.35,delay:0.3*index,repeat:Infinity,repeatType:"reverse",ease:"easeInOut"}}
        />
      ))}
    </div>
  );
};

export default Box6;
