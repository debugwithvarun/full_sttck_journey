import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  // const child=
  const images = [
    "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://static.toiimg.com/thumb/114423393/114423393.jpg?height=746&width=420&resizemode=76&imgsize=199280",
  ];
  return (
    <motion.div
      className="w-full gap-4 flex justify-center -items-center"
      variants={{
        hidden:{},
        visible: {
          transition: {
            staggerChildren: 0.6,
          },
        },
      }}

      initial={"hidden"}
      animate={"visible"}
    >
      {images.map((item,index)=>(
        <motion.img src={item} alt="" className="h-[200px] w-[200px]"
        key={index}
      variants={{
        hidden:{opacity:0,scale:0.8},
        visible:{opacity:1,scale:1}
      }}
      />
      ))}
    </motion.div>
  );
};

export default Box2;
