
import React from 'react';
import Image1 from '../../assets/images/cne_wall.jpg';
import LazyHero from 'react-lazy-hero';
import './Parallax.css';
import Introduction from '../Introduction/Introduction'



const parallax = props => (

    <div className="hello">
    <LazyHero
   className="picting"
    minHeight="40vh"
    imageSrc={Image1}
    parallaxOffset="0"
    opacity="0.2"
   
     >




        <Introduction />
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;