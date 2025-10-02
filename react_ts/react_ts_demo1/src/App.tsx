import React from 'react'
import "./App.css"
import Button from './compoents/Button'
const App = () => {
  return (
    <div>
     <Button label={"Click Me!"} disabled={false} onClick={()=>{
      alert("hello")
      console.log("Varun Chauhan")}}/>
     <Button label={"Click Me!"} disabled={true} onClick={()=>console.log("Varun Chauhan")}/>
    </div>
  )
}

export default App