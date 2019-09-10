import React, { useState, useCallback, Component } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./portraitsphotos";
import Image1 from '../../assets/images/welcome_page_pic.jpg';
import Image2 from '../../assets/images/saima_.jpg';
import Image3 from '../../assets/images/saima_-2.jpg';
import Image4 from '../../assets/images/saima_-3.jpg';
import Image5 from '../../assets/images/saima_-4.jpg';
import Image6 from '../../assets/images/saima_-5.jpg';
import './PhotosGrid.css'
import Carousel, { Modal, ModalGateway } from "react-images";
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';



function PhotosGrid() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div className="middlePhotos">
         <LazyLoad height={1000} once >
        <Gallery photos={photos} onClick={openLightbox} className="photohover" />
        </LazyLoad>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                 
              <Carousel
                currentIndex={currentImage}

                
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
             
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
    export default PhotosGrid;
 
 

