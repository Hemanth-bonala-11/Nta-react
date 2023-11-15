import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom'
import Cookies from "js-cookie";
import './css/Register.css'
import toast from "react-hot-toast";
import {BsEyeFill,BsEyeSlashFill} from "react-icons/bs"


const USER_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://127.0.0.1:3500/api/verify';


const Register = () => {
    const navigate=useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [username,setUserName]=useState('');
   
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [matchPwd, setMatchPwd] = useState('');


    const [validName, setValidName] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [validMatch, setValidMatch] = useState(false);
 
    const [success, setSuccess] = useState(false);
   
    
   
    const [userFocus, setUserFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    
    const [matchFocus, setMatchFocus] = useState(false);

    
    
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
         
            const resp =await fetch('http://127.0.0.1:3500/api/verify',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    user,
                    pwd
                })
            })
            
            // console.log(response?.data);
            // console.log(response?.accessToken);
            // console.log(JSON.stringify(response))
            // setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            // console.log(resp.json());
            const output=await resp.json();
            Cookies.set('access_token', output.token);
            console.log(output.token);
            console.log(resp.status);
            if(resp['status']===200){
                if(user.split("@")[1]==='nitj.ac.in'){
                    navigate('/teacherdashboard',{state:{email:user}});
                    toast.success("login successful");
                }
                else{
                    navigate('/studentdashboard',{state:{email:user}});
                    toast.success("login successful");
                }
                
            }
            else{
                setErrMsg("Enter Valid Credentials");
            }

            // setUser('');
            // setPwd('');
            // setMatchPwd('');
            // setUserName('');
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="register">
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 align="center">NTA</h1>
                    <form onSubmit={handleSubmit} id="form">
               
                        
                        <label htmlFor="username">
                            Email id:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must be an Email id.<br />
                        </p>
                        
                       


                        <label htmlFor="password">
                            Password:
                            {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                       


                        
                        
                        <button className="registerButton" disabled={!validName || !validPwd  ? true : false}>Login</button>
                    </form>
                    <p>
                        Don't have an account ?&nbsp;
                            {/*put router link here*/}
                            <a href="/signup" id="lg-link">Signup</a>
        
                    </p>
                    <p align="center">
                        &nbsp;
                            {/*put router link here*/}
                            <a href="/forgotpassword" id="lg-link">forgot password</a>
        
                    </p>
                </section>
            )}
        </div>
    )
}

export default Register
