import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)

  const [namelist,setnameList]=useState([])
  return (
    <div>
  <div className="1">
        <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1)
    }}>Add</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Subtract</button>
  </div>

  <div className="2">
    <ol>
   {   namelist.map((name)=>(
        <li>{name}</li>
      ))}
    </ol>
      <input type="text" id="namedata" />
      <button onClick={()=>{
        setnameList([...namelist,document.querySelector("#namedata").value])
      }}>Add Name</button>

      <button onClick={()=>{
        setnameList(namelist.filter((item,i)=>{if(namelist.length===i+1){
          return false
        }
      else{
        return true
      }}))
      }}>Pop item</button>
  </div>
    <div className="3">
      <input type="text" placeholder='old name' id='oldname'/>
      <input type="text" placeholder='new name' id='newname'/>
      <button onClick={()=>{
        const oldname=document.querySelector("#oldname").value
        const newname=document.querySelector("#newname").value
        const newarr=namelist.map((item)=>oldname===item?newname:item)
        setnameList(newarr)
      }}>Update Name</button>
  
      
    </div>
    </div>
  )
}

export default App