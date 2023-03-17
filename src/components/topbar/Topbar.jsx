import './topbar.css';
import {Person, Mail,} from '@mui/icons-material'
import { useState } from "react"
import { Link } from 'react-router-dom';

function Topbar() {

  const [isactive, setactive] = useState(false);
  function seter (){
    setactive(!isactive)
      
      }
    
  
  return (

    <>

    <div  className={isactive? "active" : "topbar"}>
      <div className='wrapper'>
        <div className='left'>
          <Link className='logo' to="/">
            <img src="assets/myImg2.png" alt="" />
            </Link>
          <div className='itemContainer'>
          <Person className= "icon"/>
          <span>+91 9140476731</span>
          </div>
          <div className='itemContainer'>
            <Mail className= "icon"/>
            <span>aajitsingh2k21@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className ={isactive? "cross" : "lines"}  onClick={seter}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
    
<div className = {isactive ? "live" : "menu"}>
      <ul>
        <li onClick={() => setactive(false)}>
            <Link to="/">Home</Link>
        </li>
        
        <li onClick={() => setactive(false)}>
        <Link to="/works">Works</Link>
        </li>
        <li onClick={() => setactive(false)}>
        <Link to="/education">Education</Link>
        </li>
        <li onClick={() => setactive(false)}>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    </>
  );
  }

  



export default Topbar