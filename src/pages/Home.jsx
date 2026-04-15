import React from 'react'
import Hero from '../component/Hero/Hero'
import StatsWithFriends from '../component/StatsWithFriends/StatsWithFriends'
import { useOutletContext } from 'react-router-dom' 

const Home = () => {
  
  const [friends] = useOutletContext(); 

  return (
    <>
      <Hero />
      
      <StatsWithFriends friends={friends} /> 
    </>
  )
}

export default Home