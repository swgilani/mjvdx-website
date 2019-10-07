
import React from 'react';
import Image1 from '../../Pictures/Portraits/ayah.jpg';
import Image2 from '../../Pictures/Landscape/q16.jpg';
import Image3 from '../../Pictures/Portraits/jeeya.jpg';
import Image4 from '../../Pictures/Landscape/q6.jpg';
import Image5 from '../../Pictures/Portraits/muskan_-min.jpg';
import Image6 from '../../Pictures/Landscape/q32.jpg';
import Image7 from '../../Pictures/Landscape/q9.jpg';
import Image8 from '../../Pictures/Landscape/q7.jpg';

import Flickity from 'react-flickity-component';
// eslint-disable-next-line 
import FlickityImgLoaded from 'flickity-imagesloaded';
// eslint-disable-next-line 
import FlickityFullScreen from 'flickity-fullscreen'
import './Carousel.css';



const carousel = props => (


    <div className="hideOverflow">

<Flickity
      options={{ wrapAround:true, pageDots: false, imagesLoaded: true,prevNextButtons: true,groupCells: true,  autoPlay: true,  }}>
      <img alt="" className="sizeImg" src={Image1}/>
      <img alt="" className="sizeImg" src={Image2}/>
      <img alt="" className="sizeImg" src={Image3}/>
      <img alt="" className="sizeImg" src={Image4}/>
      <img alt="" className="sizeImg" src={Image5}/>
      <img alt="" className="sizeImg" src={Image6}/>
      <img alt="" className="sizeImg" src={Image7}/>
      <img alt="" className="sizeImg" src={Image8}/>

    </Flickity>
    </div>
    


);

export default carousel;