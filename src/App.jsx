import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom' 
import Footer from './component/Footer/Footer'

const App = () => {
  const [friends, setFriends] = useState([])
  const [timeline, setTimeline] = useState([])


  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);
  
  const addTimelineEvent = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type,
      friendName,
      date: new Date().toLocaleDateString()
    };
    setTimeline([newEvent, ...timeline]); 
  };
  return (
    <>
      <Navbar />

      <Outlet context={[friends, timeline, addTimelineEvent]} /> 
      
      <Footer/>
    </>
  )
}

export default App