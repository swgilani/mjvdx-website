import React from 'react';
import './Introduction.css'
import Image1 from '../../assets/images/muneeb.jpg';
import { browserHistory } from "react-router";




const introduction = props => {


  const toAbout = () => browserHistory.push("/About");


  return (

   <div className="flext">
       <div className="intro-box1">
       <img alt="" className="muneebSize" src={Image1}/>
       </div>
       
       <div className="intro-box2">
              <h1 className="coloredLol">Hi, I'm Muneeb!</h1>
              <h2 className="coloredLol">I am a photographer based in Toronto, Canada</h2>
            <button className="btn-knowme" onClick={toAbout}>ABOUT ME</button>
       </div>


   </div>


);

  }

export default introduction;