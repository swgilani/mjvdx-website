/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Image1 from '../../Pictures/Events/eventsPic.jpg';
import { Link } from 'react-router-dom'
import { browserHistory } from "react-router";
import { NavLink } from 'react-router-dom'




import './CardsEvents.css';



class Cards extends React.Component {

    muskan() {
       
        window.location.assign("https://mjvdx.com/#/Prom");
        
    
    }
    lovetoronto() {
        
        window.location.assign("https://mjvdx.com/#/LoveToronto");
        
    }
    billyball() {
       
        window.location.assign("https://mjvdx.com/#/BillyBall");
       
    }
    baby() {
  
        window.location.assign("https://www.mjvdx.com/#/Baby");
      
    }

render() {

return (


<div className="obtainwidth">

    <div className="cardsflexcontainer">




        <div className="cardsflexitem">
           
         
            <a onClick={this.muskan} className="album-buttonprom"> 
	        MUSKAN'S PROM</a>
                
         </div>


    <div className="cardsflexitem">

                
            <a onClick={this.lovetoronto} className="album-button1love">
            LOVETORONTO PRODUCT SHOOT</a>
            
    </div>


    <div className="cardsflexitem">
            
            <a onClick={this.billyball} className="album-button2billy">
            BILLYBALL2K19</a>
            
    </div>



    <div className="cardsflexitem">
                
            <a onClick={this.baby} className="album-button3baby">
            BABY PHOTOS</a>
            
    </div>







    <div className="cardsflexitem1">
        <h1 style={{color:"white"}}>Events</h1> 
        <p style={{color:"white"}}>A variety of different events captured via candids and staged photos! Capturing the entirety of an event from the beginning to the end!
         </p>
         <br/>
         <img src={Image1} alt="experience of ayesha" className="experiencepic"></img> 
      
        
    </div>
    </div>

    </div>

    







)
}
}


export default Cards;