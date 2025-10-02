import React, { useState } from "react";
import { motion } from "framer-motion";
const Imageex2 = () => {
  const [show, setShow] = useState(false);
  const gallery = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72QVveWawR9SKadP5lh6ul8Qe1pHgFZOxPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1goLDsXfiEpwhbf53RDCwSkGxOw-GzcCD0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs--xGbo5lfwOBLgAlpprzlKzqeGk_mTsIFw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs--xGbo5lfwOBLgAlpprzlKzqeGk_mTsIFw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs--xGbo5lfwOBLgAlpprzlKzqeGk_mTsIFw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXJaBMPU1rlfOL0AGgaFF169E8-QWXNtbbA&s",
  ];

  const parent={
    hidden:{},
    visible:{
        transition:{
            staggerChildren:0.8,
            // staggerDirection:0
        }
    }
  }

  const child={
    hidden:{opacity:0,y:-20},
    visible:{opacity:1,y:0}
  }
  return (
    <motion.div className="w-screen flex flex-col p-4 ">
      <motion.div className="p-4 mb-8">
        <motion.button
          className="px-4 py-2 bg-amber-800 text-2xl font-bold font-mono text-amber-200 rounded-xl cursor-pointer"
          onClick={() => setShow(!show)}
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {show ? "Hide" : "Show"}
        </motion.button>
      </motion.div>
      <motion.div className="flex justify-center flex-wrap gap-10" variants={parent} initial={"hidden"} animate={show?"visible":"hidden"} 
      style={{display:show?"flex":"none"}} >
        {gallery.map((item,index) => (
          <motion.div
          key={index}
            className="w-[250px] cursor-pointer bg-white rounded-lg  shadow-lg shadow-zinc-700"
            whileHover={{
              scale: 1.1,
              rotate: 1,
            }}
            whileTap={{
              scale: 0.9,
            }}

            variants={child}
          >
            <motion.img
              src={item}
              alt=""
              className="w-[100%] h-[150px] rounded-t-lg mb-2 grayscale-100"
              whileHover={{
                filter: "grayscale(0%)",
              }}
            />
            <div className="p-4">
              <p className=" text-wrap  capitalize mb-2   text-zinc-700">
                This is the simple Card made using for framer motion testing if
                you have any problem , then don't tell me your problem okey.
              </p>
              <motion.button
                className="px-3 py-1 bg-amber-700 text-white rounded-xl font-mono"
                whileHover={{
                  backgroundColor: "darkblue",
                }}
              >
                Click ME!
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Imageex2;
