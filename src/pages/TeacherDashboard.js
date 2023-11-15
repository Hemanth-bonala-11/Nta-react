
import { useState } from 'react';
import {Link} from 'react'

import '../css/TeacherDashboard.css'
import TeacherSideBar from '../components/TeacherSideBar';
import { Route,Routes } from 'react-router-dom';
import CreateCourse from '../components/CreateCourse';

function TeacherDashboard() {
 
  
  
      return (
    <div className='teacher-main'>
            
    
    
    <TeacherSideBar/>
    <Routes>
    <Route path='/teacher/createCourse' element={<CreateCourse/>}/>

    </Routes>
    
    
       

          </div>
      );
  }
  


export default TeacherDashboard;
