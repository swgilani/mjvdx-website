import React from 'react';
import './Introduction.css'
import Image1 from '../../assets/images/muneeb.jpg';




const introduction = props => (

   <div className="flext">
       <div className="intro-box1">
       <img alt="" className="muneebSize" src={Image1}/>
       </div>
       
       <div className="intro-box2">
              <h3>Hi, I'm Muneeb!</h3>
              <p>I am a photographer based in Toronto</p>
              <p>I’ve made it my life’s mission to capture my client’s most special and beautiful moments in the form an image, an everlasting memory that they can cherish forever.</p>
       </div>


   </div>


);

export default introduction;