import React from 'react'

const One = ({a,count}) => {
  return (
    <div>
        <button onClick={()=>{
            a(count+1)
        }}>
            Add
        </button>
    </div>
  )
}

export default One