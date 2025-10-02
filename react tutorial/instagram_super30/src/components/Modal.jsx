import React from 'react'
import './Modal.css'
const Modal = ({handleClick,array,setModalView}) => {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }
  return (
    <div className='modal' onClick={() => setModalView(false)}>
        <div className="inner-box" onClick={stopPropagation}>
            <h1>CREATE POST</h1>
            <input type="text" placeholder='enter image link' id="imgLink" onKeyDown={handleKeyPress}/>
            <button onClick={handleClick} >Submit</button>
        </div>

    </div>
  )
}

export default Modal