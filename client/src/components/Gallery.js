import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { StyleSheet, css } from 'aphrodite';
import images from "../pics/portaits/portaitsArray";


function App() {
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

  // TODO make the x look nice, change on hover, use aphrodite instead of inline

  const CustomHeaderClose = () => (
    <div>
      <h1 onClick={closeLightbox} className={css(styles.closeButton)} >&#x2715;</h1>
    </div>
  )

  return (
    <div>
      <Gallery photos={images} targetRowHeight={400} onClick={openLightbox} />
      <ModalGateway>
      {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
          <Carousel
            components={{HeaderClose: CustomHeaderClose}}
            currentIndex={currentImage}
            views={images.map(x => ({
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

const styles = StyleSheet.create({
  closeButton: {
    color: 'white',
    fontSize: '55px',
    ':hover': {
      cursor: 'pointer'
    }
  }
})

export default App;