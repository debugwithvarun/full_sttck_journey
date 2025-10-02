import React from 'react'
import { useRef } from 'react'
const Ref = () => {
    const ele=useRef(null)
  return (
    <div>
        <input type="text" ref={ele} />
        <button onClick={()=>{
            ele.current.focus()
            ele.current.value="varun Chauhan "
        }}>Focus</button>
    </div>
  )
}

export default Ref