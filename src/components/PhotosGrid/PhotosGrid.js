import React, { useState, useCallback} from "react";

import Gallery from "react-photo-gallery";
import { photos } from "./landscapephotosSMALL";
import { photos2 } from "./landscapephotos";

import './PhotosGrid.css'
import Carousel, { Modal, ModalGateway } from "react-images";



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
        <Gallery photos={photos} onClick={openLightbox} className="photohover" />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos2.map(x => ({
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
 
 

