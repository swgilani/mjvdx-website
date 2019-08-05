
import React from 'react';
import Image1 from '../../assets/images/saima_.jpg';
import LazyHero from 'react-lazy-hero';
import './Parallax.css';



const parallax = props => (

    <div className="hello">
    <LazyHero
   className="picting"
    minHeight="40vh"
    imageSrc={Image1}
    parallaxOffset="1000"
    opacity="0.4"
    transitionDuration="1200"
     >
        <h1>Like what you see?</h1>
        <button>Click me</button>
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;