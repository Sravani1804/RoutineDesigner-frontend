import React from 'react'
import './exercise.css'
import data from '../../exerciseHolder.json'
import { useLocation, useNavigate } from 'react-router-dom'
import Chart from '../chart/Chart';

function Exercise() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state;
  const field = data[name];

  return (
    <>
    <center>
    <div id='exerciseMainContainer'>
      {field.map((data, index) => {
        return(
          <div className="exerciseHolder" key={index}>
            <img src={data.img} alt="" onClick={() => {navigate('/timer', {state : {name : name, exer : data.name}})}} style={{cursor: 'pointer'}}/>
            <h1>{data.name}</h1>
          </div>
        )
      })}
    </div>
    </center>
    <Chart name={name}/>
    </>
  )
}

export default Exercise
