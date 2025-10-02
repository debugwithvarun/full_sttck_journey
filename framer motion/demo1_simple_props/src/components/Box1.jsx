import React from "react";
import {motion} from "motion/react"

const Box1 = () => {
return (
    <motion.div
     className="w-[200px] h-[200px] bg-blue-600 border-4 border-white fixed top-0 left-2"
     initial={{x:0,y:0,height:0,width:0,scale:0.2}}
     animate={{x:100,y:100,height:"200px",width:"200px",scale:1}}
     transition={{duration:1,repeat:Infinity,repeatType:"reverse",type:"spring",ease:"circIn"}}
     />

);
};

export default Box1;
