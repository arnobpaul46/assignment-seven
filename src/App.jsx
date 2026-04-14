import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import StatsWithFriends from './component/StatsWithFriends/StatsWithFriends'

const Hello  = () => {
  const [friends, setFriends]=useState([])
  useEffect(() => {
  fetch("/friends.json")
    .then(res => res.json())
    .then(data => setFriends(data));
}, []);
  return (
    <>
    <Navbar/>
    <Hero/>
    <StatsWithFriends friends={friends}/>
    </>
  )
}

export default Hello 