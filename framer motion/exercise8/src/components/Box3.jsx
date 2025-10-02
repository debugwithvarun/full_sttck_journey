import React from "react";

import { motion } from "framer-motion";
const Box3 = () => {
 
  return (
    <div className="min-h-screen w-full flex justify-center items-center "
    >

      <motion.div
      className="flex gap-15"
        variants={{
      hidden:{},
      visible:{transition:{
        staggerChildren:0.6
      }}
    }}

    initial={"hidden"}
    whileInView={"visible"}
      >
        <motion.div
        className="p-4 w-[100px] h-[100px] bg-rose-300 flex justify-center items-center  border-2 border-white"
        key={1}
        variants={{
          hidden:{rotate:0},
          visible:{rotate:45}
        }}

      >
       
      </motion.div>

      <motion.div
        className="p-4 w-[100px] h-[100px] bg-rose-300 flex justify-center items-center  border-2 border-white"
        key={2}
        variants={{
          hidden:{scale:0.6},
          visible:{scale:1.3}
        }}

      >
       
      </motion.div>

      <motion.div
        key={3}
        className="p-4 w-[100px] h-[100px] bg-rose-300 flex justify-center items-center  border-2 border-white"
        variants={{
          hidden:{opacity:0},
          visible:{opacity:1}
        }}

      >
       
      </motion.div>
      </motion.div>
      
    </div>
  );
};

export default Box3;
