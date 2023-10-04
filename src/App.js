import Register from './Register';
import Register2 from './Register2';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import {Link} from "react-router-dom"; 

// function App() {

//   return (
//     <main className="App">
//       <Register />,
//       <Register2 />,
//       <Layout />
//     </main>
//   );
// }

// export default App;
export default function App() {
  return (
    // <div>
    //   <h1>Hello</h1>
      

    
    <BrowserRouter>
    {/* <Link to="/signup">signup</Link><br></br>
    <Link to="/login">login</Link> */}

      <Routes>
      
        <Route path="/" element={<Layout />}>
          
        </Route>
        <Route  path="/signup" element={<Register2 />} />
        <Route path='/login' element={<Register />} />
      </Routes>
    </BrowserRouter> 
    // </div>
    
  );
}