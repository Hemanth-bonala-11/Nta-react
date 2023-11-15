import '../css/AdminDashboard.css'

function AdminDashboard(){
    return(
        <div>
            <div className="maincon">
      <div className="0ne">
        <div id="pone">Admin Dashboard</div>
        <div id="ptwo">
          E-learning
          <small
            ><small
              ><small><small>Admin Area</small></small></small
            ></small
          >
        </div>
      </div>
      <div className="two">
        <div className="twoone">
          <a href="">Dashboard</a>
          <a href="">Courses</a>
          <a href="">Lessons</a>
          <a href="">Students</a>
          <a href="">Sell Report</a>
          <a href="">Payment Status</a>
          <a href="">Feedback</a>
          <a href="">Change Password</a>
          <a href="">Logout</a>
        </div>
        <div className="twotwo">
          <div className="twotwoone">
            <div className="card1 card">
               <div className="hea he1">courses</div>
               
                <p>8</p>
                <p>view</p>
               
            </div>
            <div className="card2 card">
                <div className="hea he2">courses</div>
               
                <div><p>8</p></div>
                <div><p>view</p></div>
               
            </div>
            <div className="card3 card">
                <div className="hea he3">courses</div>
            
                <p>8</p>
                <p>view</p>
               
            </div>
          </div>
          <div className="twotwotwo"></div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default AdminDashboard;