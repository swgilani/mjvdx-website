import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

const Footer = () => {
  return (
<div>

  <footer className="footerContainer"> 
 
    <div className="footerContainer2">
    <div className="footerGrid">

    <div className="spacingp">
        
        <p>Copyright MJVDX, 2019</p>
      
        <div className="toggleIcons">
       <a href="#"> <i className="fab fa-instagram spacingp spacingIcons" > </i></a> 
       <a href="#"><i className="fab fa-facebook-f spacingp spacingIcons" > </i></a> 
    </div>
        </div>
   
    <div className="spacing2">
       
        <p>F.A.Q</p>
        </div>





        </div>
    </div>


  </footer>

</div>


  );
}

export default Footer;