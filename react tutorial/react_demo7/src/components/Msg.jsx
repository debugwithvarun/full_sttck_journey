import React from 'react'
import {createPortal} from 'react-dom'

const Msg = ({copied}) => {
  return createPortal(
    <div style={{backgroundColor:"yellow",position:"absolute",bottom:"3rem"}}>
        {
            copied?<div>copy to clipbaord</div>:""
        }
    </div>,
    document.querySelector("#idd")
  )
}

export default Msg