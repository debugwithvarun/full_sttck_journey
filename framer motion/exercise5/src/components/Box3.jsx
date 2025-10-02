import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Box3 = () => {
  const [rotate, setRotate] = useState(0);
  return (
    <AnimatePresence>
      <motion.div
        className="p-4 w-[150px] h-[150px] bg-yellow-500 rounded-xl text-2xl flex justify-center items-center"
        drag
        onDrag={(_, info) => setRotate(rotate + info.offset.x)}
        dragConstraints={{
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        }}
        // onDragEnd={()=>setRotate(0)}
        // animate={{rotate:rotate}}
        style={{ rotate: rotate }}
        // transition={{duration:20}}
      >
        Box3
      </motion.div>
    </AnimatePresence>
  );
};

export default Box3;
