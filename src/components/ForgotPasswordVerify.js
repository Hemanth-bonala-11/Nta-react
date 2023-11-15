import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ForgotPasswordVerify(){
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer,setSecurityAnswer]=useState('');
    const [email,setEmail]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [securityAnswerLower,setSecurityAnswerLower]=useState('')
    const location = useLocation();
    const navigate=useNavigate();

  
    const [firstRender,setFirstRender]=useState(false)
    const ques=location.state;
    
    console.log(ques);
    
    useEffect(()=>{
      
      if(Object.is(ques,null)){
          navigate('/forgotpassword');    
      }
      else{
      setSecurityQuestion(ques.question);
      setEmail(ques.email)
      setFirstRender(true);
      }

    },[])
    async function submitHandler(event){
        event.preventDefault();
        setSecurityAnswerLower(securityAnswer.toLowerCase())
        const resp=await fetch('http://127.0.0.1:3500/api/checkAnswer',{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          securityAnswerLower
        })

        })
        const output=await resp.json();
        console.log(output['status']);
        if(output['status']===200){
          navigate('/resetpassword',{state:{email:email}});
        }
        else{
          setErrMsg("Entered Wrong Answer");
        }
        

    }
    
    return firstRender && (
        <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="security-question">Security Question:</label>
            <label htmlFor='randomques'>{securityQuestion}</label>



            <label htmlFor="security-answer">Security Answer:</label>
            <input
              type="text"
              id="security-answer"
              name="securityAnswer"
              placeholder="Enter your answer here"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />
            <p id="error-message">{errMsg}</p>
            <button type="submit" id="submit-button2">Submit</button>
          </form>
        </div>
    )
}

export default ForgotPasswordVerify;