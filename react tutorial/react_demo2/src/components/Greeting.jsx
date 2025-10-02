import React from 'react'

const Greeting = () => {
    const name="varun Chauhan"
  return (
    <div>
        <h1>{name}</h1>
        <p>{(new Date()).getDate()}</p>
    </div>
  )
}

export default Greeting