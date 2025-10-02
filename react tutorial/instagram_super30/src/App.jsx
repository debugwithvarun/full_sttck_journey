import React from 'react'
import Post from './components/Post'
import './App.css'
import { useState } from 'react'
import Modal from './components/Modal'
import Yello from './components/Yello'  

const App = () => {
  const [modalview,setModalView]=useState(false)
  const[array,setArray]=useState([])
  

  const handleCLick=()=>{
    
    const imgLink=document.getElementById("imgLink").value
    const obj={image:imgLink}
    setArray([...array,obj])
    setModalView(false)

  }  

  console.log(array)
  return (
    


    <div className='container'>
      
        {modalview && <Modal setModalView={setModalView} array={array} handleClick={handleCLick} />}
        <h1>INSTAGRAM</h1>
        <button onClick={() => setModalView(true)}>Create Post</button>
        <div className="lowercon">
        {array.length > 0 && array.map((item,index) => {
          return (
            <Post key={index} image={item.image}/>
          )
        }
        )}
      
        </div>
         
    </div>
  
  )
}

export default App