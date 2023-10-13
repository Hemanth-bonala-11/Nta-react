import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../css/StudentDashBoard.css";
import { useEffect, useState } from "react";
function StudentDashBoard() {
  const [navWidth, setNavWidth] = useState("0");
  const [dashboardMargin, setDashboardMargin] = useState("0");
  const location=useLocation();
  const data=location.state;
  const navigate=useNavigate();

  useEffect(()=>{
    if(Object.is(data,null)){
      navigate('/login');
    }

  },[])
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar-active");
   
  }
  return (
    <div className="main">
      <div className="sidebar" id="sidebar">
        <div className="title">
          N<sub>2</sub>A
        </div>
        <div className="options">
          <a href="/studentdashboard">
            <span className="icon">📚</span> All Courses
          </a>
          <a href="/studentdashboard">
            <span className="icon">🏠</span> Dashboard
          </a>
          <a href="/studentdashboard">
            <span className="icon">👤</span> Profile
          </a>
          <a href="/studentdashboard">
            <span className="icon">🔒</span> Enrolled Courses
          </a>
          <a href="/studentdashboard">
            <span className="icon">🚪</span> Logout
          </a>
        </div>
      </div>
      <div className="dashboard-button" >
        <span className="icon" onClick={toggleSidebar}>
          ☰
        </span>
      </div>
      <div>
        Student Dashboard
      </div>
      {/* <div className="content" id="content">
        <div className="cards">1</div>
        <div className="cards">2</div>
        <div className="cards">3</div>
        <div className="cards">4</div>
        <div className="cards">5</div>
        <div className="cards">6</div>
        <div className="cards">7</div>
        <div className="cards">8</div>
        <div className="cards">9</div>
        <div className="cards">10</div>
        <div className="cards">11</div>
        <div className="cards">12</div>
        <div className="cards">13</div>
        <div className="cards">14</div>
        <div className="cards">15</div>
        <div className="cards">16</div>
      </div> */}
    </div>
  );
}

export default StudentDashBoard;
