import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import NavBar from './components/NavBar'
import CreateCourse from './components/CreateCourse'
import CourseList from './components/CourseList'
import CoursePurchased from './components/CoursePurchased'
import CreateUsers from './components/CreateUsers'
import Community from './components/Community';
import { LoginRegiser } from './components/LoginRegiser';


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container p-4">
        <Routes>
          <Route path='/' element={<CourseList/>}/>
          <Route path='/courseAll' element={<CourseList/>}/>
          <Route path='/coursePurchased' element={<CoursePurchased/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/loginRegister' element={<LoginRegiser/>}/>
          <Route path='/create' element={<CreateCourse/>}/>
          <Route path='/edit/:id' element={<CreateCourse/>}/>
          <Route path='/createCourse' element={<CreateCourse/>}/>
          <Route path='/user' element={<CreateUsers/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
