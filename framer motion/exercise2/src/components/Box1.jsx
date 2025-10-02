import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Box1 = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        className="px-4 py-2 rounded-2xl text-xl font-bold text-white bg-green-800 mb-4"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            className="h-[100px] w-[200px] bg-pink-700 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Box1;
