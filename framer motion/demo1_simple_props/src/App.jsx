import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";
import Box6 from "./components/Box6";

const App = () => {

  return (
    <div className="bg-black text-amber-300 p-2 w-screen h-screen flex flex-col gap-2 justify-center items-center">
      <Box1/>
      <Box2/>
      <Box3/>
      <Box4/>
      <Box5/>
      <Box6/>
    </div>
  );
};

export default App;
