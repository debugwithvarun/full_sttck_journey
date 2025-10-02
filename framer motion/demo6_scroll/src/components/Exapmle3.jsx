import React from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
const Exapmle3 = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY,"change",(y)=>{
    console.log(y)
  })
  const scale = useTransform(scrollY, [0, 600], [1, 0]);
  const borderRadius = useTransform(scrollY, [0, 600], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  // const y=useTransform(scrollY,[0,300],[0])
  return (
    <div className="w-screen h-full">
      <motion.img
      src="https://thumbs.dreamstime.com/b/exotic-tropical-resort-jetty-near-cancun-mexico-travel-vacations-concept-tourism-87825663.jpg"
        className="w-full h-full object-cover "
        alt=""
        
        style={{scale,borderRadius,opacity}}
      />

      {/* <motion.div className="sticky top-[100px] w-full bg-yellow-600 text-black flex justify-center" >
        Scroll to Animate
      </motion.div> */}
    </div>
  );
};

export default Exapmle3;
