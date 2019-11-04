
import React from 'react';

import Image2 from '../../Pictures/Carousel/a8.jpg';
import Image3 from '../../Pictures/Carousel/a7.jpg';
import Image4 from '../../Pictures/Carousel/a6.jpg';
import Image5 from '../../Pictures/Carousel/a5.jpg';
import Image6 from '../../Pictures/Carousel/a4.jpg';
import Image7 from '../../Pictures/Carousel/a3.jpg';
import Image8 from '../../Pictures/Carousel/a2.jpg';
import Image9 from '../../Pictures/Carousel/a1.jpg';

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
     
    
  
      <img alt="" className="sizeImg" src={Image6}/>
      
      <img alt="" className="sizeImg" src={Image3}/>
      <img alt="" className="sizeImg" src={Image4}/>
      <img alt="" className="sizeImg" src={Image7}/>
      <img alt="" className="sizeImg" src={Image5}/>
      <img alt="" className="sizeImg" src={Image9}/>
      <img alt="" className="sizeImg" src={Image8}/>
     
  
      <img alt="" className="sizeImg" src={Image2}/>

    </Flickity>
    </div>
    


);

export default carousel;