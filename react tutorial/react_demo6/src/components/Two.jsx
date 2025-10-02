import React from 'react'

const Two = ({b,count}) => {
  return (
    <div>
        <button onClick={()=>{
            b((prex)=>{
                return prex-1
            })
        }}>
            Minus
        </button>
    </div>
  )
}

export default Two