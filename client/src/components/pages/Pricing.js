import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header';
import Info from '../Info';
import Price from '../Price';
import background from '../../pics/misc/tofino.jpg';

const Pricing = (props) => (
  <div className={css(styles.pricingPage)}>
    <Header />
    <div className={css(styles.spacer)}></div>
    <Info color="white"
      first="It's true: I'm doing this for money"
      second="But at the same time, I'm not doing this to get rich. I'm just doing it 
      to make some easy cheese so I can have time and money to fix my boat, sail it around,
      and work on my other plethora of ideas to make 100 million dollars. So yeah, you're not
      gonna find prices better than this. Also, the other people around here don't take particularly
      great pix... but I take darbyPix"
    />
    <div className={css(styles.pricing)}>
      <Price 
        type="Personal" 
        price="$60 per hour" 
        description="For individuals tryna become famous or something"
      />
      <Price 
        type="A la Carte" 
        price="$5 - $15 per picture" 
        description="For like, restaurants and business facebook pages n stuff"
      />
      <Price 
        type="Real Estate" 
        price="$200 per home" 
        description="For houses or apartments or whatever that need pictures taken of them"
      />
    </div>
    <p>Have something else in mind? Send me a message with this nifty-as-fuck contact form!</p>
  </div>
)

export default Pricing;

const styles = StyleSheet.create({
  pricingPage: {
    background: 'linear-gradient( rgba(0, 0, 0, .8), rgba(0, 0, 0, 0) ), url(' + background + ')',
    backgroundRepeat: 'no-repeat'
  },
  info: {
    color: 'white'
  },
  pricing: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0px 10px'
  },
  spacer: {
    height: 55
  }
})