
import React from 'react';
import Image1 from '../../assets/images/cne-wall.jpg';
import LazyHero from 'react-lazy-hero';
import './Parallax.css';
import Introduction from '../Introduction/Introduction'



const parallax = props => (

    <div className="hello">
    <LazyHero
   className="picting"
    minHeight="40vh"
    imageSrc={Image1}
    parallaxOffset="1000"
    opacity="0.3"
    transitionDuration="1200"
     >




        <Introduction />
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;