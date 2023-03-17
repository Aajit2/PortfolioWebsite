import { useState } from 'react';
import Topbar from '../topbar/Topbar';
import './contact.css';

function Contact() {
  const [message, setMessage] = useState(false)

  function handleSubmit(e){
    e.preventDefault();
    setMessage(true)
  }
  return (

    <div className='contact' id='contact'>
      <Topbar/>
      <div className='left_contact'>
        <img src="assets/img3.png" alt="" />
      </div>
      <div className='right_contact'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email'></input>
          <textarea placeholder='message'></textarea>
          <button type='submit'>send</button>
          {message && <span> Thanks, I'll reply ASAP :) </span> }
        </form>
      </div>
    </div>
  )
}

export default Contact