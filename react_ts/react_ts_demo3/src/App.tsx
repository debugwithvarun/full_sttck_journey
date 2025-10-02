// import React, { useState } from 'react'
import Count from './Count'
import Todo from './Todo'
import UserProfile from './UserProfile'

const App = () => {
  return(
      <div>
        <Count/>
        <hr />
      <UserProfile/>
      <hr />
      <Todo/>
      </div>
  )
}

export default App