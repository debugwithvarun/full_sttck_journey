import React, { useState } from "react";
import { AnimatePresence, easeIn, motion } from "framer-motion";

const Box3 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-screen bg-[#1c1c1c] flex justify-center items-center">
      <motion.button
        className="px-4 py-2 rounded-xl bg-pink-700 hover:bg-pink-400"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setShow(true)}
      >
        Click Me!
      </motion.button>

      <AnimatePresence>
              {show && (
        <div
          className="w-full h-screen bg-[#1c1c1c] flex justify-center items-center fixed bg-[#3ac3ee33]"
          onClick={() => setShow(false)}
        >
          <motion.div
            className="w-[300px]  bg-white rounded-xl shadow-xl shadow-[#1c1c1c] p-4 flex flex-col "
            onClick={(e) => e.stopPropagation()}
            variants={{
              hidden:{opacity:0,y:"-100vh"},
              visible:{opacity:1,y:"0vh"},
              exit:{opacity:0,y:"100vh"}
            }}
            initial={"hidden"}
            animate={show?"visible":"hidden"}
            exit={"exit"}
            transition={{duration:0.5,ease:"easeInOut"}}
          >
            <h1 className="font-extrabold text-xl mb-2">Modal Title</h1>
            <p className="mb-4 ">There is some random modal content here.</p>
            <button
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-300 w-[100px]"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Box3;
