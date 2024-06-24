import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'
import CreateCourse from './components/CreateCourse'
import CourseList from './components/CourseList'
import CoursePurchased from './components/CoursePurchased'
import CreateUsers from './components/CreateUsers'


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<CourseList/>}/>
        <Route path='/coursePurchased' element={<CoursePurchased/>}/>
        <Route path='/create' element={<CreateCourse/>}/>
        <Route path='/edit/:id' element={<CreateCourse/>}/>
        <Route path='/user' element={<CreateUsers/>}/>
      </Routes>
    </Router>
  );
}

export default App
