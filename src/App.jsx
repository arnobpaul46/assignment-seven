import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [friends, setFriends] = useState([])
  const [timeline, setTimeline] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const navigate = useNavigate(); 
  const location = useLocation();


  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setIsLoading(false);

// for the set home page 
         if (location.pathname !== '/home') {
        navigate('/home');
    }
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