import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

import Background from '../../../pics/home/benOnCliff.jpg';
import { headerHeight } from '../../../styleSettings';
import { inflate, deflate } from '../../../styles/animations';

const HomeImage = ({ history }) => {

  return (
    <div className={css(styles.homeImage)}>
      <div className={css(styles.homeImagesSpacer)}></div>
      <h4 className={css(styles.homeImagesText1)}>I take pictures for money.</h4>
      <h4 className={css(styles.homeImagesText2)}>More money<br/>means better pictures.</h4>
      <div className={css(styles.makeAccountButtonContainerContainer)}>
        <div className={css(styles.makeAccountButtonContainer)}>
          <div onClick={() => {history.push('/portfolio')}} className={css(styles.makeAccountButtonContent)} tabIndex={0}>
            <p>Give me money</p>
            <p className={css(styles.makeAccountButtonText2)}>Give me money</p>
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
    marginBottom: 100,
  },
  homeImagesText2: {
    fontWeight: '200',
    fontSize: 30,
    marginTop: 100,
    
  },
  makeAccountButtonContainerContainer: {
    paddingBottom: 50
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