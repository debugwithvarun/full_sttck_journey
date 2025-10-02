import React from 'react'
import { useState } from 'react'
import Msg from './Msg'
const Copy = () => {
    const [inputvalue,setInputValue]=useState("")
    const [copied,setCopied]=useState(false)

    const handleCopy=()=>{
        navigator.clipboard.writeText(inputvalue).then(()=>{
            // console.log("copy sucess")
            setCopied(true)
            setTimeout(()=>setCopied(false),2000)
        })
    }
    return (
    <div>
        <input type="text" value={inputvalue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
        <Msg copied={copied}/>
    </div>
  )
}

export default Copy