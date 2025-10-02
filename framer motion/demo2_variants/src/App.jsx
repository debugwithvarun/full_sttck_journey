import React from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'

const App = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <Box1/>
      <Box2/>
    </div>
  )
}

export default App