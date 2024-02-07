import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
   
        <div className='footer-container' >
            <div className='footer-subcontainer'>
                 <img src="./images/logo.png" alt=''/>
            </div>

            <div className='footer-subcontainer'>
               <h3>DOWNLOAD</h3>
               <par>Mac App</par><br/>
               <par>Window App</par><br/>
               <par>Linux App</par><br/>
               <par>Mobile App</par>
              
            </div>

            <div className='footer-subcontainer'>
            <h3>GET IN TOUCH</h3>
            <FaLinkedinIn className='socialmedia-icons' />
            <FaXTwitter className='socialmedia-icons' />
            <FaInstagram className='socialmedia-icons'/><br/>
            <input type='text' placeholder='Enter Email'/><button>Submit</button>
            </div>
        </div>
    
  )
}

export default Footer