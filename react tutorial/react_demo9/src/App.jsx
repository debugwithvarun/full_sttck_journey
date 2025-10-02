import React from 'react'
import { createContext } from 'react'
import One from './components/One';

export const data1 = createContext();
export const data2 = createContext();

const App = () => {
  const a="varun"
  const b="ojit"
  return (
    <data1.Provider value={a}>
      <data2.Provider value={b}>
          <One/>
      </data2.Provider>
    </data1.Provider>
  )
}

export default App