import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

import Background from '../../../pics/home/benOnCliff.jpg';
import { headerHeight } from '../../../styleSettings';
import { inflate, deflate } from '../../../styles/animations';

const HomeImage = (props) => {

  const goToPricing = () => {
    props.history.push('/pricing');
  }

  return (
    <div className={css(styles.homeImage)}>
      <div className={css(styles.homeImagesSpacer)}></div>
      <h4 className={css(styles.homeImagesText1)}>I take pictures for money.</h4>
      <h4 className={css(styles.homeImagesText2)}>More money<br/>means better pictures.</h4>
      <h4 className={
        css(styles.homeImagesMoneyText)} 
        onClick={goToPricing}
        onMouseOver={inflate}
        onMouseOut={deflate}
        tabIndex="0"
      >
        Give me money
      </h4>
  </div>
  )
}

const styles = StyleSheet.create({
  homeImage: {
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + Background + ')',
    position: 'relative',
    // mobile
    '@media only screen and (max-width: 750px)': {
      width: '100vw',
      height: '100vh',
      backgroundSize: 'auto 100vh',
      backgroundPosition: 'top right -110px',
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      backgroundSize: '100vw auto',
      backgroundPosition: 'bottom right 0px',
    }
  },
  homeImagesSpacer: {
    height: headerHeight,
    position: 'relative',
  },
  homeImagesText1: {
    fontWeight: '100',
    fontSize: 30,
    marginTop: 100,
    marginBottom: 100,
  },
  homeImagesText2: {
    fontWeight: '200',
    fontSize: 30,
    marginTop: 100,
    
  },
  homeImagesMoneyText: {
    fontWeight: '300',
    fontSize: 30,
    display: 'inline-block',
    marginTop: 60,
    padding: 20,
    border: 'solid white 1px',
    ':hover': {
      cursor: 'pointer'
    }
  }
})

export default withRouter(HomeImage);