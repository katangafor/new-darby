import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import firebase from '../../../firebase/firebase';

import Header from '../misc/Header';
import Info from '../misc/Info';
import Gallery from '../misc/Gallery';
import Footer from '../misc/Footer';
import AlbumContent from './AlbumContent';

const PortfolioPage = ({ albumNames, albums }) => {

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <Header />
      <div className={css(styles.spacer)}></div>
      <Info
        first="Look on my works, ye Mighty, and despair"
      />
      <div className={css(styles.portfolioContainer)}>
        <div className={css(styles.portfolioNav)}>
          {albumNames && albumNames.map((album, index) =>{
            return <button 
              className={css(styles.portfolioNavButton)} 
              key={album}
              onClick={() => setSelected(index)}
            >{album}</button>
          })}
        </div>
        {albums[selected] && <Gallery images={albums[selected]}/>}
      </div>
      {/* <Footer /> */}
  </div>
  )
}

export default PortfolioPage;

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
  portfolioPage: {
    position: 'relative'
  },
  portfolioContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  portfolioNav: {
    position: 'relative',
    left: 0,
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  portfolioNavButton: {
    fontSize: 30,
    padding: '30px 10px',
    background: 'none',
    border: 'none',
    ':hover': {
      color: 'gray',
      cursor: 'pointer'
    },
    ':focus': {
      color: 'gray',
      outline: 'none'
    }
  }
})