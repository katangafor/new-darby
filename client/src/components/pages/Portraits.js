import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header';
import Info from '../Info';
import Gallery from '../Gallery';

// TODO add a max width to the text box

const Portraits = () => (
  <div>
    <Header />
    <div className={css(styles.spacer)}></div>
    <Info
      first="Portraits: pictures of faces"
      second="Wow, I take a lot of pictures of faces. Let me tell you what, I know how to picture a face.
      First, you take a picture of the left side. Then, you copy the image, reverse it, and put them together to get a full face.
      It's cheaper this way, cause you don't have to get a camera that can take a picture of a whole face. It also makes you look hotter, cause
      your crappy face is more symmetric."
    />
    <Gallery />
  </div>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
})

export default Portraits;