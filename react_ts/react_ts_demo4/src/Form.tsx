// import React from 'react'

import { useRef, useState, type FormEvent } from "react"

const Form = () => {
  type usertype={
    name:string,
    email:string,
    age?:number|undefined,
    password:string|number
  }
  const [user,setUser]=useState<usertype>({
    name:"",
    email:"",
    password:""
  })

  const name=useRef<HTMLInputElement>(null)
  const age=useRef<HTMLInputElement>(null)
  const email=useRef<HTMLInputElement>(null)
  const password=useRef<HTMLInputElement>(null)
  const handleClick=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setUser({...user,
        name:name.current!.value,
        email:email.current!.value,
        age:Number(age.current!.value),
        password:password.current!.value,
    })
    
  }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input type="text" placeholder="enter your name" ref={name} />
            <input type="number" placeholder="enter your age" ref={age} />
            <input type="email" placeholder="enter your email" ref={email} />
            <input type="password" placeholder="enter your password" ref={password} />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>

        <section>
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1>
            <h1>Age : {user.age}</h1>
            <h1>password : {user.password}</h1>
        </section>
    </div>
  )
}

export default Form