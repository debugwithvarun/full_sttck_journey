import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'
const AddTodo = () => {
    const[input,setInput]=useState("")
    const dispatch=useDispatch()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type='Submit'>AddTodo</button>
           
        </form>
    </div>
  )
}

export default AddTodo