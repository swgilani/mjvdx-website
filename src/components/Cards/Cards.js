/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Image1 from '../../Pictures/Weddings/E-shoot/Ayesha/experience.jpg';
import { Link } from 'react-router-dom'
import { browserHistory } from "react-router";




import './Cards.css';


class Cards extends React.Component {


    saima() {
        
        window.location.assign("https://mjvdx.com/#/Saima");
    }
    jowayne() {
      
        window.location.assign("https://mjvdx.com/#/Jowayne");
    }
    hamza() {

        window.location.assign("https://mjvdx.com/#/Hamza");
    }
    eshoots() {

        window.location.assign("https://www.mjvdx.com/#/eshoots");
    }


      render() {

       


return (
 


<div className="obtainwidth">

    <div className="cardsflexcontainer">




        <div className="cardsflexitem">
           
           
            <a onClick={this.saima} className="album-button"> 
	        SAIMA & ADNAN</a>
             
         </div>


    <div className="cardsflexitem">

                
            <a onClick={this.jowayne} className="album-button1">
            JOWAYNE & T</a>
            
    </div>


    <div className="cardsflexitem">
                
            <a onClick={this.hamza} className="album-button2">
            HAMZA & NAZNIN</a>
          
    </div>



    <div className="cardsflexitem">
          
            <a onClick={this.eshoots} className="album-button3">
            E-SHOOTS</a>
           
    </div>







    <div className="cardsflexitem1">
        <h1 style={{color:"white"}}>The Experience</h1> 
        <p style={{color:"white"}}>You’re planning the biggest day of your life and it all comes down to this joyous event! Let me capture the raw emotions, love, laughter and tears in a simple, elegant and cinematic look! 
                                        I will be there during every step of the process- from helping you plan your wedding schedule, finding suitable good E-shoot locations, to delivering your beautifully edited pictures shortly after the wedding!
                                        I will capture memories that you will cherish for a lifetime! Don't believe me? Hear from a recently married couple below!
         </p>
         <br/>
         <img src={Image1} alt="experience of ayesha" className="experiencepic"></img> 
         <br/>
         <div className="blockquote">
                <p>“I only had a couple of days until my engagement and I needed a photographer for my e-shoot. I came across Muneeb who was very polite and understanding and was able to take my appointment despite him having a busy schedule. He arrived on time at the location for the shoot with his camera and the poses ready. He was very efficient and quick and knew right away which pose to do one after the other. He made me and my fiancé feel comfortable and we were very pleased. After the photo shoot, our pictures arrived 1-2 weeks later. My fiancé and I were surprised to know they were ready so fast as we were eagerly waiting to see them. 

After seeing the pictures, I must say I was very shocked. Muneeb did a tremendous job. The angle, lighting and pose in every picture was perfect. He captured every magical moment for us and allowed us to keep these wonderful memories. He is a talented photographer who I definitely recommend as he will capture beautiful memories that you can keep. Thank you Muneeb for capturing these memories, I will cherish them forever.”</p>
<span className="spancolor">Ayesha Khan</span>
         </div>
        
    </div>
    </div>

    </div>

    







)
}
}

export default Cards;