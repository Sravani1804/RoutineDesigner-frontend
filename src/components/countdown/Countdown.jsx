import React, { useState, useEffect } from 'react';
import './countdown.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Chart from '../chart/Chart';
import axios from 'axios';
import mexer from '../../assets/mexer.svg'
import wexer from '../../assets/wexer.svg'

function Countdown() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState("00:10:00");
  const [finish, setFinish] = useState(false);
  const exer = data.exer;
  useEffect(() => {
    const timer = setInterval(async () => {
      const [hours, minutes, seconds] = countdown.split(':').map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
      if (totalSeconds < 0) {
        clearInterval(timer);
        setFinish(true);
        await axios.put('https://routinedesigner-backend-we7d.onrender.com/user/exercise', {exer})
      } else {
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        setCountdown(`${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate, data, exer]);


  return (
    <div className='timer'>
      <br /><br /><br />
      <center><h1>{countdown}</h1></center>
      <br /><br />
      <center><div id="finish" style={{display: finish ? 'block' : 'none'}} 
      onClick={() => {navigate('/exercise', {state : data.name});}}>Finish</div></center>
      <center><h2>Refer the Guide for sets & Reps</h2></center>
      <img src={mexer} alt="" />
      <img src={wexer} alt="" id="wexer" />
      <Chart name={data.name} />
    </div>
  );
}

export default Countdown;
