import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header';
import Info from '../Info';
import Gallery from '../Gallery';
import Footer from '../Footer';

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
    <Gallery />
    <Footer />
  </>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
})

export default Portraits;