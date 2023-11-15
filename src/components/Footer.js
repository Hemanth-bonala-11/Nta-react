import '../css/Footer.css'

function Footer(){
    return(
        <div className='footer-main'>
            
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />
             <footer className="footer">
      <div className="details">
        <div className="ftrt">
          <h2>Neophyte To Adept</h2>
        </div>
        <div className="ftradrs">
          <div id="locicon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div id="add">
            Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab
            144011
          </div>
        </div>
        <div id="email">
          <label for="emailadd"><i className="fa-solid fa-envelope"></i></label>
          <a id="emailadd" href="">feedback@nta.org</a>
        </div>
        <div id="ctus">
          <div>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="coursedetails">
        <div>
          <h3>Company</h3>
          <a href="" className="link">About us</a>
          <a href="" className="link">Legal</a>
          <a href="" className="link">Careers</a>
          <a href="" className="link">In Media</a>
          <a href="" className="link">Contact us</a>
          <a href="" className="link">Advertise with us</a>
        </div>
        <div>
          <h3>Languages</h3>
          <a href="" className="link">Python</a>
          <a href="" className="link">Java</a>
          <a href="" className="link">C++</a>
          <a href="" className="link">PHP</a>
          <a href="" className="link">SQL</a>
          <a href="" className="link">Android Tutorial</a>
        </div>
        <div>
          <h3>DSA Concepts</h3>
          <a href="" className="link">Data Structures</a>
          <a href="" className="link">Arrays</a>
          <a href="" className="link">Strings</a>
          <a href="" className="link">Linked List</a>
          <a href="" className="link">Algorithms</a>
          <a href="" className="link">Searching</a>
          <a href="" className="link">Sorting</a>
          <a href="" className="link">Mathematical</a>
          <a href="" className="link">Dynamic Programming</a>
        </div>
        <div>
          <h3>Web Development</h3>
          <a href="" className="link">HTML</a>
          <a href="" className="link">CSS</a>
          <a href="" className="link">JavaScript</a>
          <a href="" className="link">Bootstrap</a>
          <a href="" className="link">ReactJS</a>
          <a href="" className="link">AngularJs</a>
          <a href="" className="link">NodeJS</a>
          <a href="" className="link">Express.js</a>
          <a href="" className="link">Lodash</a>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer;