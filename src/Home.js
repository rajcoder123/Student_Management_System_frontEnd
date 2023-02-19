import React from 'react'
import logo from './main.png';
import './Home.css'
const Home = () => {
  return (
    <div className='img'>
        <img src={logo} alt="Logo" />;
        {/* <div className='zoom' >Student</div>
        <div id = "middlebox">Professor</div>
        <div id = "rightbox">Branch</div> */}
    </div>
  )
}

export default Home