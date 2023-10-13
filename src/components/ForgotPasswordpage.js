import React, { useState } from 'react';
import '../css/ForgotPasswordpage.css'
import { useRef, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForgotPasswordVerify from './ForgotPasswordVerify';
import { useNavigate } from 'react-router-dom';


const USER_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const ForgotPasswordpage = () => {
  const navigate=useNavigate()
  // const [username, setUsername] = useState('');
 
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [errMsg,setErrMsg]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp =await fetch('http://127.0.0.1:3500/api/forgot',{
      method:"POST",
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          user
      })
    }
    )
    const output=await resp.json();
    // const output2=await resp.status
    if(output['status']===200){
      // console.log(output.question);
      const question=output.question;
      navigate('/forgotpasswordVerify',{ state:{question : question,email:user}})
    }
    else{
      setErrMsg("Enter valid Email");
      
    }

  };
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
}, [user])
  
  

  return (
    <div id="fpcontainer">
      
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">
      Email id:
      <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
      <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
      </label>
      <input
      type="text"
      id="username"
      autoComplete="off"
      onChange={(e) => setUser(e.target.value)}
      value={user}
      required
      aria-describedby="uidnote"   
      placeholder=' Enter Your Email'
  />

<p id='error-message'>{errMsg}</p>
       <div id="fpsubmitbutton">          
        <button type="submit" id='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordpage;
