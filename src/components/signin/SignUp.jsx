import { useState } from 'react'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaWeightScale } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { GoNumber } from "react-icons/go";
import { GiBodyHeight } from "react-icons/gi";
import './signin.css'


function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/user/register', {
        name, age, height, weight, email, password
      })
      .then(res => {
        alert(res);
        if(res.message === 'Account created successfully'){
          navigate("/signin")
        }
      })
      .catch(e => {
        alert('unexpected error at server')
        console.log(e)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div id="login" >
    <form method='POST' onSubmit={submit} id='form'>
        <div className="inputBox">
            <FaUser />
            <input id='input' type="text" required placeholder="First name" value={name} onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div className="inputBox">
            <GoNumber />
            <input id='input' type="number" required placeholder="Age" value={age} onChange={(e) => {setAge(e.target.value)}}/>
        </div>
        <div className="inputBox">
            <GiBodyHeight />
            <input id='input' type="number" required placeholder='Height(in cm)' value={height} onChange={(e) => {setHeight(e.target.value)}}/>
        </div>
        <div className="inputBox">
            <FaWeightScale />
            <input id='input' type="number" required placeholder='Weight(in kg)' value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
        </div>
        <div className="inputBox">
            <SiGmail />
            <input id='input' type="email" required placeholder="EMail" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className="inputBox">
            <i onClick={() => {setShowPass(!showPass)}} style={{background: 'transparent', border: 'none', cursor:'pointer'}}>
                { showPass ? <IoMdEyeOff /> : <IoMdEye />}
            </i>
            <input id='input' type={showPass ? 'text' : 'password'} required placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </div> 
        <center><button type="submit" className="logbtn" id='button'>Sign up</button></center>      
    </ form></div>
    </>
  )
}

export default SignUp
