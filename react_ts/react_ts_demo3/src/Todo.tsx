import React, { useState } from 'react'

const Todo = () => {

    const[todo,setTodo]=useState<string[]>([
        "wake early",
        "make tea",
        "do coding"
    ])
  return (
    <div>
        {
            todo.map((item)=>(
                 <h1>{item}</h1>
            ))
        }
    </div>
  )
}

export default Todo