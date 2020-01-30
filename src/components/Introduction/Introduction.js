import React from 'react';
import './Introduction.css'
import Image1 from '../../assets/images/muneeb.jpg';
import { browserHistory } from "react-router";
import { Link } from 'react-router-dom'




const introduction = props => {





  return (

   <div className="flext">
       <div className="intro-box1">
       <img alt="" className="muneebSize" src={Image1}/>
       </div>
       
       <div className="intro-box2">
              <h1 className="coloredLol">Hi, I'm Muneeb!</h1>
              <h2 className="coloredLol">I'm a photographer based in Toronto, Canada</h2>
           <Link to='About'> <button className="btn-knowme" >ABOUT ME</button></Link>
       </div>


   </div>


);

  }

export default introduction;