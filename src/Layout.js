// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/signup">signup</Link>
//           </li>
//           <li>
//             <Link to="/login">login</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;
import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
    return (
        <>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/signup">signup</Link></li> */}
                <li><a href='/'>Home</a></li>
                <li><a href='/signup'>signup</a></li>
                <li><a href='/login'>login</a></li>
                
            </ul>
        </>
    )
}