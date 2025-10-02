import React from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'

const App = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[#1c1c1c]'>
      {/* <Box1/> */}
      {/* <div className="h-[300vh]"></div> 
      <Box2/> */}
      <div className="h-[300vh]"></div> 
      <Box3/>
      {/* <div className="h-[300vh]"></div> 
      <Box4/> */}
    </div>
  )
}

export default App