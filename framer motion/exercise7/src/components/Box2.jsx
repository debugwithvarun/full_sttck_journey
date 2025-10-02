import React from "react";
import { motion,useMotionValue,useSpring } from "framer-motion";

const Box2 = () => {
  // const child=

  const scale=useSpring(1)
  return (
  <motion.div className="p-10 w-[100px] h-[100px] bg-yellow-500"
  style={{scale}}
  onHoverStart={()=>scale.set(1.5)}
  onHoverEnd={()=>scale.set(1)}
  transition={{duration:1}}
  >

  </motion.div>
  )
};

export default Box2;
