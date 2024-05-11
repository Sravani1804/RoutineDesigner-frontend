import React from 'react'
import './choice.css'
import { useLocation, useNavigate } from 'react-router-dom'
import choosing from '../../assets/choosing.svg'
import selecting from '../../assets/selecting.svg'

function Choice() {
    const location = useLocation();
    const navigate = useNavigate();
    const { field1, field2 } = location.state || {};
    const handleClick1 = () => {
        navigate('../muscleComponent', {state : field1})
    }
    const handleClick2 = () => {
        if(field2 === 'Resistance'){
            navigate('../choice', { state : {field1 : 'upperbody', field2 : 'lowerbody'} })
        }
        else{
            navigate('../muscleComponent', {state : field2})
        }
    }

  return (
    <div className='choice'>
        <center><h1 style={{fontSize: '3rem'}}>Choose Your Routine</h1></center>
        <div className='holder'>
            <div className="container">
               <button onClick={handleClick1}><p> {field1} </p></button><br />
               <button onClick={handleClick2}><p> {field2} </p></button>
            </div>
        </div>
        <img src={choosing} alt="" id="choosing"/>
        <img src={selecting} alt="" id="selecting" />
    </div>
  )
}

export default Choice
