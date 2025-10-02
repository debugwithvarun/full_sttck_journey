import React, { useState } from 'react'

const UserProfile = () => {
    interface profile{
        name:string,
        email:string,
        age:number
    }
    const[user,setUser]=useState<profile>({
        name:"ABC",
        email:"abc@email.com",
        age:21
    })
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.age}</h1>
    </div>
  )
}

export default UserProfile