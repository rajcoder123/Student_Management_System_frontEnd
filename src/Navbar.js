import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='nav'><ul>
    <li><button type='button' className='Home' class="btn btn-success"><Link to="/Home">Home</Link></button></li>
    <li><button type='button' className='Student' class="btn btn-secondary"><Link to="/AllStudents">Student</Link></button></li>
    <li><button type='button' className='Professor' class="btn btn-secondary"><Link to="/Professor">Professor</Link></button></li>
    <li><button type='button' className='Branch' class="btn btn-secondary"><Link to="/Branch">Branch</Link></button></li>
    
  </ul>
  </div>

  )
}

export default Navbar