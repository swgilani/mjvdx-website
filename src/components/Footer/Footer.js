import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div>

  <footer className="footerContainer"> 
 
    <div className="footerContainer2">
    <div className="footerGrid">

    <div className="spacingp">
        
        <p>Copyright MJVDX, 2019</p>
      
        <div className="toggleIcons">
       <a href="https://www.instagram.com/mjvdx/"> <i className="fab fa-instagram spacingp spacingIcons" > </i></a> 
       <a href="https://www.facebook.com/mjvdx/"><i className="fab fa-facebook-f spacingp spacingIcons" > </i></a> 
    </div>
        </div>
   
    <div className="spacing2">
       
     <Link to='FAQ'><p>F.A.Q</p></Link> 
        </div>





        </div>
    </div>


  </footer>

</div>


  );
}

export default Footer;