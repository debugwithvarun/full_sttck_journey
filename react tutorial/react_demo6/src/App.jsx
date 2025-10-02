import React from 'react'
import { useState } from 'react'
import One from './components/One'
import Two from './components/Two'
const App = () => {
  const [count,setCount]=useState(0)
  return (

    <div>
      <h1>{count}</h1>
      <One a={setCount} count={count}/>
      <Two b={setCount} count={count}/>
    </div>
  )
}

export default App