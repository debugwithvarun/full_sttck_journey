import React from "react";
import { motion } from "framer-motion";
const Box2 = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-fullflex-col"
      initial={{ rotateY: 0 }}
      whileInView={{ rotateY: 180 }}
      transition={{ duration: 2 }}
      //  reserve-3d" }}
    >
      <motion.div className="absolute flex justify-center p-2 pt-4 pb-4 items-center bg-violet-400 h-[300px] w-[250px] text-4xl font-extrabold text-white "

          >
        front
      </motion.div>
      <motion.div
        className="absolute flex justify-center p-2 pt-4 pb-4 items-center bg-red-400 h-[300px] w-[250px] text-4xl font-extrabold text-white "
        style={{ transform: "rotateY(180deg)" }}
    



      >
        back
      </motion.div>
    </motion.div>
  );
};

export default Box2;
