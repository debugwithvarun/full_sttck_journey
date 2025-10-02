import React, { useRef } from 'react'

const Focus = () => {
    const focusfield=useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type="text" ref={focusfield}/>
        <button onClick={()=>
            focusfield.current!.focus()
        }>Focus</button>
    </div>
  )
}

export default Focus