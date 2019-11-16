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
      first="Nature: full of horses"
      second="Look, each of us knows where he stands on the topic of Horses. I have no ambitions
      toward sorting out the Horse question or converting anyone to one side or the other.
      Still, I will give my opinion here for the record. I am completely fed up with them. There
      is no activity in my life that would be bettered by adding a Horse to it, and very many activities
      that would be bettered by having horses removed, like the annual Horse Fight I take part in, 
      where I attempt to beat the shit out of a horse, and lose."
    />
    <Gallery />
    <Footer />
  </div>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  }
})

export default Natural;