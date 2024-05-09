import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
function Report() {
  return (
    <div className='fixed-bottom right-100 p-3' style={{zIndex:"6", left:"initial"}}>
    <a href="https://wa.me/918897279778?text=Hello" target='_blank'><FaWhatsapp style={{ color: '#25d366', fontSize: '50px' }} /></a>
  </div>
  );
}

export default Report;
