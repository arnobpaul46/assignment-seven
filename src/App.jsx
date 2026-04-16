import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [friends, setFriends] = useState([])
  const [timeline, setTimeline] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setIsLoading(false);
      });
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

      <Outlet context={[friends, timeline, addTimelineEvent, isLoading]} />

      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App