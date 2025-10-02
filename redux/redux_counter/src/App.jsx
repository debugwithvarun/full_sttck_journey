import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './app/features/counter/counterSlice'

const App = () => {
  const count=useSelector((state)=>state.counter.valueCount)
  const dispatch=useDispatch()
  console.log(count)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment(10))}>+</button>
        <button onClick={()=>dispatch(decrement(1))}>-</button>
    </div>
  )
}

export default App