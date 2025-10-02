import React from "react";
import { motion,useSpring } from "framer-motion";

const Box4 = () => {
 const rotate=useSpring(0)
 console.log(Math.random()*360)
  return (
   <motion.div className="p-10 w-[100px] h-[100px] bg-yellow-500"
   style={{rotate}}
   onClick={()=>rotate.set(Math.random()*360)}
   ></motion.div>
  )
}
export default Box4;
