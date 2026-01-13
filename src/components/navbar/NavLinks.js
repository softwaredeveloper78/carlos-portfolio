import React from 'react';
import { FaLinkedin, FaWhatsapp} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  // WhatsApp number - replace with your actual WhatsApp number (include country code, no + or spaces)
  // Example: 1234567890 for US, or 919876543210 for India
  const whatsappNumber = '5219581188881'; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><a  href="https://www.linkedin.com/in/carlos-medina-2607a5399/" target='_blank' className='nav-link' rel="noreferrer"><FaLinkedin /></a></li>
        <li onClick={handleNav} ><a  href="https://github.com/softwaredeveloper78" target='_blank' className='nav-link' rel="noreferrer"><BsGithub /></a></li>
        <li onClick={handleNav} ><a  href="mailto:carlosamedina.in@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
        <li onClick={handleNav} ><a  href={whatsappUrl} target='_blank' className='nav-link' rel="noreferrer"><FaWhatsapp /></a></li>
  </ul>
  )
};

export default NavLinks;
