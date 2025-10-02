import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from './features/todo/todoSlice'
import AddTodo from './components/AddTodo'

const App = () => {
  const datatoshow=useSelector((state)=>state.todos)
  const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(updateTodo({id:"1",text:"bye bye"}))}>Update</button>
      <br />
      <AddTodo/>

      <hr />

      <h1>Todo</h1>
      <table style={{width:"60vw"}}>
        <tr >
          <th style={{border:"2px solid white"}}>ID</th>
        <th style={{border:"2px solid white"}}>TEXT</th>
        <th style={{border:"2px solid white"}}>REMOVE</th>
        </tr>
        {
          datatoshow.map((item)=>(
            <tr key={item.id}>
              <td style={{border:"2px solid white"}}>{item.id}</td>
              <td style={{border:"2px solid white"}}>{item.text}</td>
       
              <td style={{border:"2px solid white"}} onClick={()=>dispatch(removeTodo({ id: item.id }))}>❌</td>
            </tr>
          ))
        }

      </table>
      
    </div>
  )
}

export default App