import React from 'react'

const Button=({num})=>{
  return <button onClick={()=>{
    console.log("hello",num)
  }}>Click Me {num} </button>
}

const App = () => {
  return (
    <div>
      <Button num="1"/>
      <br />
      <Button num="2"/>
  

    </div>
  )
}

export default App