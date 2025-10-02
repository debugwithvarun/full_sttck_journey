import React, { useState } from 'react'

const Count = () => {
  const [count,setCout]=useState<number>(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCout((prev)=>prev+1)}>+</button>
      <button onClick={()=>setCout((prev)=>prev-1)}>-</button>
    </div>
  )

}

export default Count