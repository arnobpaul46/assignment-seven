import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom' 

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
    </>
  )
}

export default App