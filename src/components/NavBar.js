import '../css/Layout.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function NavBar(){
    const navigate=useNavigate();
    return(
        <div>
            <div className="navbar">
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
        </div>
    )
}

export default NavBar;