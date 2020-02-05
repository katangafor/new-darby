import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

import Background from '../../../pics/home/benOnCliff.jpg';
import { headerHeight } from '../../../styleSettings';

const HomeImage = ({ history }) => {

  return (
    <div className={css(styles.homeImage)}>
      <div className={css(styles.homeImagesSpacer)}></div>
      <h4 className={css(styles.homeImagesText1)}>Let’s face it: everyone needs better pictures </h4>
      <h4 className={css(styles.homeImagesText2)}>For that date on Tinder</h4>
      <h4 className={css(styles.homeImagesText2)}>That job LinkedIn</h4>
      <h4 className={css(styles.homeImagesText2)}>Or your brand's new website</h4>
      <h4 className={css(styles.homeImagesText3)}>Authentic photos for authentic people</h4>
      <div className={css(styles.makeAccountButtonContainerContainer)}>
        <div className={css(styles.makeAccountButtonContainer)}>
          <div onClick={() => {history.push('/portfolio')}} className={css(styles.makeAccountButtonContent)} tabIndex={0}>
            <p>Book now</p>
            <p className={css(styles.makeAccountButtonText2)}>Book now</p>
          </div>
        </div>
      </div>
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
    marginBottom: 60,
    // mobile
    '@media only screen and (max-width: 750px)': {
      fontSize: 23,
      marginTop: 50,
      marginBottom: 30
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      fontSize: 30,
      marginTop: 100,
      marginBottom: 60,
      }
  },
  homeImagesText2: {
    fontWeight: '200',
    // mobile
    '@media only screen and (max-width: 750px)': {
      fontSize: 23,
      marginTop: 10,
      marginBottom: 10
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      fontSize: 30,
      marginTop: 10,
      marginBottom: 10
      }
  },
  homeImagesText3: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      fontWeight: '300',
      fontSize: 23,
      marginTop: 30,
      marginBottom: 15
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      fontWeight: '300',
      fontSize: 30,
      marginTop: 60,
      marginBottom: 30
      }
  },
  makeAccountButtonContainerContainer: {
    paddingBottom: 80
  },
  makeAccountButtonContainer: {
    height: 80,
    width: 220,
    position: 'relative',
    top: 40,
    border: '1px solid white',
    borderRadius: 10,
    margin: '0 auto',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 300,
    overflow: 'hidden',
    marginBottom: 20
  },
  makeAccountButtonContent: {
    position: 'relative',
    bottom: 20,
    padding: '20px 0px',
    transition: 'all .2s',
    ':hover': {
      bottom: 113,
      cursor: 'pointer'
    },
    // mobile
    '@media only screen and (max-width: 750px)': {
      bottom: 113
    }
  },
  makeAccountButtonText2: {
    position: 'relative',
    top: 10,
    color: 'black',
    backgroundColor: 'white',
    padding: '30px 0px'
  },
})

export default withRouter(HomeImage);