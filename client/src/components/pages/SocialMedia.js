import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from './misc/Header';
import Info from './misc/Info';
import Gallery from './misc/Gallery';
import Footer from './misc/Footer';

const getInfo = () => {
  fetch('/info')
  .then(res => res.text())
  .then(data => {
    console.log(data)
  })
}

const SocialMedia = () => (
  <>
    <Header />
    <div className={css(styles.spacer)}></div>
    <Info
      first="Social Media: All Ducks"
      second='Charles Darwin once wrote that Ducks, "Are the Dumb Asses, of Birds."
        For years the geniuses or the world did not know what he meant by this, until
        they saw a duck in person for themselves. Ducks do not eat seeds or Bugs
        like normal birds. Instead they subsist entirely on whole slices of bread that are flung at 
        them, like frisbees, by small children. You just cannot respect some one who lives like that.'
    />
    <Gallery />
    <button onClick={getInfo}>Get some info</button>
    <Footer />
  </>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  }
})

export default SocialMedia;