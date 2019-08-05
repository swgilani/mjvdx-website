import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Image1 from '../../assets/images/welcome_page_pic.jpg';
import Image2 from '../../assets/images/saima_.jpg';
import Image3 from '../../assets/images/saima_-2.jpg';
import Image4 from '../../assets/images/saima_-3.jpg';
import Image5 from '../../assets/images/saima_-4.jpg';
import Image6 from '../../assets/images/saima_-5.jpg';
import './PhotosGrid.css'


const PhotoGrid = props => (

<div className="middlePhotos">
    
    <Gallery photos={photos} />
 
    </div>
    
 
 
 );
 
 export default PhotoGrid;


