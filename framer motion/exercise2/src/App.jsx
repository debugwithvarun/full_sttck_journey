import React, { useState } from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import Box5 from './components/Box5'

const App = () => {
  // const[show,setShow]=useState(false)
  return (
    <div className='w-screen min-h-screen bg-[#1c1c1c]'>
      {/* <Box1/> */}

      {/* box2  */}
      {/* <button className='px-4 py-2 bg-green-400 rounded-xl cursor-pointer hover:bg-green-200 top-10 left-10 absolute'
      onClick={()=>setShow(true)}
      >Click ME!</button>
      <Box2 show={show} setShow={setShow}/> */}


      {/* <Box3/> */}
      {/* <Box4/> */}
      <Box5/>
    </div>
  )
}

export default App