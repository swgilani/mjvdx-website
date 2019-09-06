
import React from 'react';
import Image1 from '../../assets/images/cne-wall.jpg';
import LazyHero from 'react-lazy-hero';
import './Parallax.css';
import Image2 from '../../assets/images/muneeb.jpg';




const parallax = props => (

    <div className="hello">
    <LazyHero
   className="picting"
    minHeight="75vh"
    imageSrc={Image1}
    parallaxOffset="60"
    opacity="0.3"
   
     >

    <div className="aboutflexcontainer">
        <div className="aboutflexitem1">
            <img src={Image2} alt="muneeb"></img>
        </div>
    <div className="aboutflexitem2">

     <h1 className="parallaxh1size1">About me</h1>   
    </div>





    </div>









    </LazyHero> 
</div>

);

export default parallax;