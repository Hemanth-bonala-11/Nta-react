
import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './css/Layout.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function Layout() {
    const navigate=useNavigate();

    return (
        <div>
            <div className='upper'>
            <div className="navb">
            <nav>
            <ul id="deatils">
                <li><a href="/">Home</a></li>
                <li><a href="#aboutpara">About</a></li>
                <li id="listofcourses"> <a href="/">Courses</a></li>
                <li><Link to="/contactus">Contact</Link></li>
            </ul>
            <a href="/"><h2 className="LOGO">N<sub>2</sub>A</h2></a>
            <div className='sign-log-buttons'>
                <button className="button" onClick={()=>{navigate('/signup')}}>Signup</button>
                <button className="button" onClick={()=>{navigate('/login')}}>Login</button>
            </div>
        </nav>
            </div>
            
     <div className="container">
        <span id='sp1'> <img src="./images/merncourse.jpg" alt=""/></span>
        <span  id='sp2'> <img src="./images/iotcourseimg.png" alt=""/></span>
        <span id='sp3'> <img src="./images/cppimgcourse.png" alt=""/></span>
        <span id='sp4'> <img src="./images/machinelearningcourse.jpg" alt=""/></span>
        <span id='sp5'> <img src="./images/javacourseimg.jpg" alt=""/></span>
        <span id='sp6'> <img src="./images/cybersecurity.jpg" alt=""/></span>
        <span id='sp7'> <img src="./images/blockchaincourseimg.png" alt=""/></span>
        <span id='sp8'> <img src="./images/pythonimgcourse.jpeg" alt=""/></span>
      </div>
      </div>
      {/* <div id="aboutpara">
      <div className="Aboutpara"  >
        Neophyte to Adept E-Learning represents a powerful gateway to transform yourself from a beginner to an adept in your chosen field. With its diverse course offerings, structured learning paths, expert instructors, interactive tools, flexibility, and tracking mechanisms, this e-learning website empowers you to chart your path to mastery with confidence and convenience. Embrace the opportunity to learn, grow, and become an adept in your chosen field, all from the comfort of your own digital classroom. Your journey to mastery starts here.In the digital age, e-learning has revolutionized education, making it possible for individuals worldwide to embark on a journey from neophyte to adept in their chosen fields. This transformation is no longer limited by geographic boundaries, expensive tuition fees, or rigid schedules. Neophyte to Adept E-Learning, an innovative online platform, leverages the power of the internet to facilitate your personal and professional growth.
      </div>
      </div> */}
      <div>
        <Footer/>
      </div>
      
      
     </div>
    )
}

export default Layout;