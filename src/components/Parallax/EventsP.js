
import React from 'react';
import Image1 from '../../Pictures/Events/BillyBall/q14.jpg';

import LazyHero from 'react-lazy-hero';
import './Parallax.css';




const parallax = props => (

    <div className="hello">
    <LazyHero
   className="picting"
    minHeight="75vh"
    imageSrc={Image1}
    parallaxOffset="0"
    opacity="0.3"
   
     >



<h1 className="parallaxh1size"
>EVENTS</h1> 
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;