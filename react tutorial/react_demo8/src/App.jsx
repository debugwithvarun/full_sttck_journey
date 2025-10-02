import React, { useEffect, useState } from 'react'

const App = () => {
 const [data,setData]=useState(0)
 const[array,setArray]=useState([])
  useEffect(()=>{
    console.log("every rendering")
  }
  )

  useEffect(()=>{
    console.log("single reandring")
  },[])

  useEffect(()=>{
    document.title=`title-${data}`
    console.log("value of data is changed")
  },[data])

  useEffect(()=>{
    const getData=async(url)=>{
      const response=await fetch(url)
      const responsedata=await response.json()
      setArray(responsedata)
      console.log(responsedata)
    }
    getData("https://jsonplaceholder.typicode.com/posts")
  },[])
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>setData((prev)=>prev+1)}>Click ME!</button>
      <br />
      <br />
      <ul>
       {
        array.map((item)=>{
          return <li key={Math.random()}>{item.title}</li>
        })
       }
      </ul>
    </div>
  )
}

export default App