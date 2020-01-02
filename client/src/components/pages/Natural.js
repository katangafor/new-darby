import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header';
import Info from '../Info';
import Gallery from '../Gallery';
import Footer from '../Footer';

const Natural = () => (
  <div>
    <Header />
    <div className={css(styles.spacer)}></div>
    <Info
      first="Look on my works, ye Mighty, and despair"
    />
    <Footer />
  </div>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  }
})

export default Natural;