import React, { use } from 'react'
import {useState,useEffect} from 'react'

const Yello = () => {
    const [count, setCount] = useState(0);
    function hello(){
      setCount(pre=>pre+1)
      console.log(count)
    }
    function helloo(){
      setCount(pre=>pre-1)
      console.log(count)
    }
   useEffect(() => {
    console.log(count)

   },[count])


  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

    <p>{count}</p>
    <button onClick={hello} style={{ margin: "5px" }}>+</button>
    <button onClick={helloo} style={{ margin: "5px" }}>-</button>
    </div>
    
  )
}

export default Yello