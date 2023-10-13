import Register from './Register';
import Register2 from './Register2';
import Layout from './Layout';
import StudentDashBoard from './components/StudentDashboard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ForgotPasswordpage from './components/ForgotPasswordpage'
import ForgotPasswordVerify from './components/ForgotPasswordVerify';
import ResetPassword from './components/ResetPassword';
// import {Link} from "react-router-dom
// export default App;
function App() {
  return (
    // <div>
    //   <h1>Hello</h1>
      

    
    <BrowserRouter>
    {/* <Link to="/signup">signup</Link><br></br>
    <Link to="/login">login</Link> */}

      <Routes>
      
        <Route path="/" element={<Layout/>}/>
        <Route  path="/signup" element={<Register2 />} />
        <Route path='/login' element={<Register />} />
        <Route path='/studentdashboard' element={<StudentDashBoard />}/>
        <Route path='/forgotpassword' element={<ForgotPasswordpage/>}/>
        <Route path='/forgotpasswordVerify' element={<ForgotPasswordVerify/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        
      </Routes>
    </BrowserRouter> 
    // </div>
    
  );
}

export default App;