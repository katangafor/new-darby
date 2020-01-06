import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Gallery from '../misc/Gallery';

/*
  Pictures should be an array of objects that looks like
  [
    {
      src: downloadURL
      width
      height
    }
  ]
*/
const AlbumContent = ({ albumName, pictures, selected, setSelected, fetchPictures }) => {

  const [albumPictures, setAlbumPictures] = useState([]);

  useEffect(() => {
    if (albumName === selected) {
      setAlbumPictures(pictures);
    }
  }, [pictures])

  const makeSelection = () => {
    if (albumName !== selected) {
      setSelected(albumName);
    } else if (albumName === selected) {
      setSelected('');
    }
    fetchPictures(albumName);
  }

  return (
    <div className={css(styles.wrapper)}>
      <div 
        className={css(
          styles.albumContent,
          albumName === selected && styles.containerThisSelectionMade,
          albumName !== selected && styles.containerOtherSelectionMade,
          selected === '' && styles.containerNoSelectionMade,
        )} 
        onClick={makeSelection}
      >
        <h1 className={css(
          styles.title,
          albumName === selected && styles.titleThisSelectionMade
        )}>{albumName}</h1>
        {albumPictures && <Gallery images={albumPictures} />}
      </div>
    </div>
  )
}

export default AlbumContent;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  albumContent: {
    display: 'inline-block',
    width: '95%',
    height: 200,
    border: '2px solid black',
    margin: 5,
    opacity: '100%',
    transition: 'all .5s ease-in-out',
    position: 'relative'
  },
  title: {
    padding: 10,
    margin: 0,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  containerNoSelectionMade: {
    // opacity: '100%',
    // display: 'inline-block',
  },
  containerOtherSelectionMade: {
    // opacity: '0%',
  },
  containerThisSelectionMade: {
    height: 1000
    // border: '2px solid blue',
    // transform: `translateY(-${index * 217}px)`
  },
  titleNoSelectionMade: {
  },
  titleOtherSelectionMade: {

  },
  titleThisSelectionMade: {
  }
})