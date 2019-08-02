
import React from 'react';
import Image1 from '../../assets/images/welcome_page_pic.jpg';
import LazyHero from 'react-lazy-hero';
import './Parallax.css';



const parallax = props => (

    <div className="hello">
    <LazyHero imageSrc={Image1} parallaxOffset="1000" opacity="0.2" transitionDuration="1200">
        <h1>Like what you see?</h1>
        <button>Click me</button>
    </LazyHero>

    {/* ... */}
</div>
    


);

export default parallax;