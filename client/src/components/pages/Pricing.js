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
        features={['Some retouching', '10 billion megapixel downloads', 'DVD collection of every Adam Sandler movie', 'a coupon for Bed Bath & Beyond']}
      />
      <Price 
        type="A la Carte" 
        price="$5 - $15 per picture" 
        description="For like, restaurants and business facebook pages n stuff"
        features={['Lots of retouching', '10 billion megapixel downloads', 'DVD collection of every Adam Sandler movie', 'a coupon for Bed Bath & Beyond', 'A collection of fine pistachio powders']}
      />
      <Price 
        type="Real Estate" 
        price="$150 - $350 per home" 
        description="For houses or apartments or whatever that need pictures taken of them"
        features={['Literally infinite retouching', '10 billion megapixel downloads', 'DVD collection of every Adam Sandler movie', 'a coupon for Bed Bath & Beyond', 'a collection of fine pistachio powders', 'Mustaches crudely drawn on all pictures']}
      />
    </div>
    {/* <p>Have something else in mind? Send me a message with this nifty-as-fuck contact form!</p> */}
  </div>
)

export default Pricing;

const styles = StyleSheet.create({
  pricingPage: {
    background: 'linear-gradient( rgba(0, 0, 0, .8), rgba(0, 0, 0, 0) ), url(' + background + ')',
    backgroundRepeat: 'no-repeat',
    // mobile
    '@media only screen and (max-width: 750px)': {
      width: '100vw',
      height: '100vh',
      backgroundSize: 'auto 100vh',
      backgroundPosition: 'top left',
    }
  },
  info: {
    color: 'white',
    // mobile
    '@media only screen and (max-width: 750px)': {
      marginBottom: 400
    }
  },
  pricing: {
    justifyContent: 'space-around',
    margin: '0px 10px',
    // desktop
    '@media only screen and (min-width: 750px)': {
      display: 'flex',
    }
  },
  spacer: {
    height: 55
  }
})