import '../css/ResetPassword.css'
import { useState , useEffect} from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function ResetPassword(){
    const [newPassword,setNewPassword]=useState('');
    const [confPassword,setConfPassword]=useState('');
    const [validPwd,setValidPwd]=useState(false);
    const [validMatch, setValidMatch] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [newpwdFocus,setNewPwdFocus]=useState(false);
    let user;
    try{
        const location = useLocation()
        const data=location.state;
        user=data.email
    }
    catch(err){
        console.log(err);
        user="";
    }
    const navigate=useNavigate()


    console.log(newPassword);
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(newPassword));
        setValidMatch(newPassword === confPassword);
    }, [newPassword, confPassword])
    async function clickHandler(event){
        event.preventDefault();
        const response=await fetch("http://127.0.0.1:3500/api/updatePassword",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                user,
                newPassword
            })
        })
        const output=await response.json()
        console.log(output);
        if(output['status']===200){
            navigate('/login')
        }
        else{
            console.log("error has occured");
        }

        




    }
    return(
        <div>
    
        
        <div id='container'>
        <div id='top-container'>
        <div><h1>N2A</h1></div>
        </div>
            <div id='right-container'>
            
            <div id="labeldiv">
                <label htmlFor="new" id='new-label'>New Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !newPassword ? "hide" : "invalid"} />
                </label>
                <label htmlFor="confirm" id='conf-label'>Confirm Password:
                <FontAwesomeIcon icon={faCheck} className={ validMatch && validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={ validMatch || ! confPassword ? "hide" : "invalid"} />
                </label>
            </div>
            
            <div id="textdiv">
            
                <input
                    id="new"
                    type="password"
                    onChange={(e)=>{setNewPassword(e.target.value)}}
                    value={newPassword}
                    onFocus={()=>{setPwdFocus(true)}}
                    onBlur={() => setPwdFocus(false)}
                />
                {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}
                    <input
                    id="confirm"
                    type="password"
                    onChange={(e)=>{setConfPassword(e.target.value)}}
                    value={confPassword}
                    onFocus={()=>{setNewPwdFocus(true)}}
                    onBlur={() => setNewPwdFocus(false)}
                     />  
                     {/* <p id="confirmPwdnote" className={newpwdFocus && !validMatch ? "instructions" : "offscreen"}>
                        
                        <p id='confirmPWDnote'><FontAwesomeIcon icon={faInfoCircle} />Must match the first password input field.</p>
                    </p> */}
            </div>
            </div>
            <div id="bottom-container">
            <button id='button' onClick={clickHandler}
            disabled={validPwd && validMatch ? false : true}
            >Confirm</button>
            
            </div>
            
            
        </div>
                    <div className='note'>
                        <p id='note-heading'>Note*</p>
                        <p>8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

        </div>
        
        </div>
    )
}

export default ResetPassword;