import React from "react";
import { motion } from "framer-motion";
const Box3 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10">
      <motion.div
        class="h-[200px] w-[150px] rounded-2xl  bg-linear-to-t from-sky-500 to-indigo-500"
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: -200,
          bottom: 200,
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
      ></motion.div>
      <motion.div
        class="h-[200px] w-[150px] rounded-2xl  bg-linear-to-bl from-violet-500 to-fuchsia-500"
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: -200,
          bottom: 200,
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
      ></motion.div>
      <motion.div
        class="h-[200px] w-[150px] rounded-2xl  bg-linear-65 from-purple-500 to-pink-500"
        drag
        dragConstraints={{
          left: -200,
          right: 200,
          top: -200,
          bottom: 200,
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
      ></motion.div>
    </div>
  );
};

export default Box3;
