import React from 'react'

const App = () => {
  const num=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <table>
       <thead>
         <tr>
          <th>Number</th>
          <th>Square</th>
          <th>Cube</th>
        </tr>
       </thead>
    <tbody>
          {num.map((item)=>(
          <tr key={Math.random()}>
            <td>{item}</td>
            <td>{item*item}</td>
            <td>{item*item*item}</td>
          </tr>
        ))}
    </tbody>
      </table>
    </div>
  )
}

export default App