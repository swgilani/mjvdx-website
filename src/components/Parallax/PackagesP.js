
import React from 'react';
import Image1 from '../../assets/images/cne-wall.jpg';
import LazyHero from 'react-lazy-hero';
import './Parallax.css';




const parallax = props => (

    <div className="hello">
    <LazyHero
   className="picting"
    minHeight="75vh"
    imageSrc={Image1}
    parallaxOffset="60"
    opacity="0.3"
   
     >



<h1 className="parallaxh1size"
>PACKAGES</h1> 
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;