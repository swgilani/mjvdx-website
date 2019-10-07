
import React from 'react';
import Image1 from '../../assets/images/cne_wall.jpg';
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



<h1 className="parallaxh1size">FAQ</h1> 
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;