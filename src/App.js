import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Create from './Create';
import Navbar from './Navbar';
import AllStudents from './AllStudents';
import Update from './Update';
import Professor from './Professor';
import Branch from './Branch';
import CreateProfessor from './CreateProfessor';
import UpdateProfessor from './UpdateProfessor';
import CreateBranch from './CreateBranch';
import UpdateBranch from './UpdateBranch';
import Home from './Home'
function App() {
  return (
<div className='main'>
   <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/AllStudents" element={<AllStudents />} />
        <Route path="/Professor" element={<Professor />} />
        <Route path="/Branch" element={<Branch />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/CreateProfessor" element={<CreateProfessor />} />
        <Route path="/UpdateProfessor" element={<UpdateProfessor />} />
        <Route path="/CreateBranch" element={<CreateBranch />} />
        <Route path="/UpdateBranch" element={<UpdateBranch />} />
        
       
      
      </Routes>
</div>
  );
}

export default App;
