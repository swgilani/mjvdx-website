
import React from 'react';
import Image1 from '../../assets/images/welcome_page_pic.jpg';
import Image2 from '../../assets/images/saima_.jpg';
import Image3 from '../../assets/images/saima_-2.jpg';
import Image4 from '../../assets/images/saima_-3.jpg';
import Image5 from '../../assets/images/saima_-4.jpg';
import Image6 from '../../assets/images/saima_-5.jpg';
import Flickity from 'react-flickity-component';
// eslint-disable-next-line 
import FlickityImgLoaded from 'flickity-imagesloaded';
// eslint-disable-next-line 
import FlickityFullScreen from 'flickity-fullscreen'
import './Carousel.css';



const carousel = props => (


    <div className="hideOverflow">

<Flickity
      options={{ wrapAround:true, pageDots: false, imagesLoaded: true,prevNextButtons: false,groupCells: true,  autoPlay: true,  }}>
      <img alt="" className="sizeImg" src={Image1}/>
      <img alt="" className="sizeImg" src={Image2}/>
      <img alt="" className="sizeImg" src={Image3}/>
      <img alt="" className="sizeImg" src={Image4}/>
      <img alt="" className="sizeImg" src={Image5}/>
      <img alt="" className="sizeImg" src={Image6}/>
    </Flickity>
    </div>
    


);

export default carousel;