import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom' 

const App = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);
  

  return (
    <>
      <Navbar />

      <Outlet context={[friends]} /> 
    </>
  )
}

export default App