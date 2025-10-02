
import React, { useState } from 'react'

const App = () => {
  const[initial,setInitial]=useState("")

  const[todo,setTodo]=useState([

  ])

  const handleClick=()=>{
    setTodo([...todo,initial])
    
    setInitial("")
  }

  const deletItem=(index)=>{
    const newTodo=todo.filter((item,index2)=>{
      if(index===index2){
        return false;
      }
      else{
        return true
      }
    })

    setTodo(newTodo)

  }
  

  return (
    <div>
      <input type="text" value={initial} onChange={(e)=>setInitial(e.target.value)} />
      <button onClick={()=>handleClick()}>Add Todo</button>
      <br />
      {
        todo.map((item,index)=>(
          <article style={{display:"flex",width:"50%",justifyContent:"space-between"}}>
             <li>{item}</li>

           <button onClick={()=>deletItem(index)}>delete</button>
          </article>

        ))
      }
    </div>
  )
}

export default App



// import React from 'react'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//         <Header/>
//         <MainContent/>
//         <Footer/>
//     </div>
//   )
// }

// export default App
