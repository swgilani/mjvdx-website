
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
    parallaxOffset="20"
    opacity="0.3"
   
     >




        <Introduction />
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;