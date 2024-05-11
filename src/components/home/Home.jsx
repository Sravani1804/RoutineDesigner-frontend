import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate('/signin')
    navigate('/choice', {state : { field1: 'cardio', field2: 'Resistance' }})
  }

  return (
    <center>
      <h1 id="heading">FitFolio</h1>
      <img id='img' src="https://shotkit.com/wp-content/uploads/2021/08/Fitness-photography-anush-gorak.jpeg" alt='' />
      <h2>Your Fitness Routine Designer</h2>
      <div className="getStarted"><button onClick={handleClick}>Get Started</button></div>
    </center>
  )
}

export default Home