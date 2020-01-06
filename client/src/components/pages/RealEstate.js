import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from './misc/Header';
import Info from './misc/Info';
import Gallery from './misc/Gallery';
import Footer from './misc/Footer';
import images from '../../pics/portaits/portaitsArray';

// TODO add a max width to the text box

const Portraits = () => (
  <>
    <Header />
    <div className={css(styles.spacer)}></div>
    <Info
      first="Real estate: pictures of faces"
      second="Something about using the latest technology and techniques to delivery high fidelity something
      something. Something about how important it is to accurately represent a home, and it takes more than a
      fancy camera to do that. "
    />
    <Gallery images={images}/>
    <Footer />
  </>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
})

export default Portraits;