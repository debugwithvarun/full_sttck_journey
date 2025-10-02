import React from 'react'

const Events = () => {
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(e)
    }
    const handleEnter=(e:React.MouseEvent<HTMLDivElement>)=>{
        console.log("enter",e)
    }
  return (
    <div onMouseEnter={handleEnter}>
        <p>my name is don't <br />
        whoa are you </p>
        <br />
        <button onClick={handleClick}>Click!</button>
    </div>
  )
}

export default Events