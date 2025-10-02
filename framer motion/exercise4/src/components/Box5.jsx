import { motion,AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";

const Box5 = () => {
  const [todo, setTodo] = useState([]);
  const [ip, setIp] = useState("");

  const todovar={
    h:{opacity:0,x:"-150%"},
    v:{opacity:1,x:"0%"},
    e:{opacity:0,x:"-150%"},
  }
  return (
    <div className="w-full h-screen justify-center items-center flex pt-10 flex-col">
      <div className="flex gap-10 p-3 h-[60px] fixed top-20">
        <input
          type="text"
          placeholder="Add Task"
          className="p-3 border-0 border-b-3 border-yellow-400 outline-0 accent-yellow-400 text-white"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <button
          className="py-3 px-6 bg-yellow-400 text-balck font-bold flex justify-center items-center rounded-lg hover:bg-yellow-300 cursor-pointer"
          onClick={() => {
            setTodo([...todo, ip]);
            setIp("")
          }}
        >
          Add
        </button>
      </div>


      <div className="fixed top-40 flex flex-col gap-4">
          <AnimatePresence>
        {
            todo.map((items,index)=>(
                                    <motion.div className="px-4 py-2 bg-yellow-400 text-black flex justify-between w-[400px] hover:bg-yellow-300" key={index}
                variants={todovar}
                initial={"h"}
                animate={"v"}
                exit={"e"}
                transition={{duration:0.5,ease:"easeInOut"}}
                >
                    <p>{items}</p>
                    <button className="text-xl font-extrabold cursor-pointer"
                    onClick={()=>setTodo(todo.filter((item,id)=>id!==index))}
                    >X</button>
                </motion.div>
            ))
        }
                </AnimatePresence>
      </div>
    </div>
  );
};

export default Box5;
