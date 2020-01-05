import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import firebase from '../../firebase/firebase';

import Header from '../Header';
import Info from '../Info';
import Gallery from '../Gallery';
import Footer from '../Footer';

const Portfolio = () => {

  const [pictures, setPictures] = useState('');
  const [albumNames, setAlbumNames] = useState([]);

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetchPictures();
    fetchAlbumNames();
  }, [])

  // pass this down as an argument for the album content 
  const fetchPictures = () => {
    let images = [];
    firebase.database().ref('nature shit').once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let image = {
          src: childSnapshot.child('downloadURL').val(),
          width: parseInt(childSnapshot.child('width').val()),
          height: parseInt(childSnapshot.child('height').val())
        }
        images.push(image);
      })
    })
    setPictures(images);
  }

  const fetchAlbumNames = () => {
    let albums = [];
    firebase.database().ref('albums').once('value').then((snapshot) => {
      snapshot.forEach((album) => {
        albums.push(album.key);
      })
    })
    setAlbumNames(albums);
  }

  

  return (
    <div>
      <Header />
      <div className={css(styles.spacer)}></div>
      <Info
        first="Look on my works, ye Mighty, and despair"
      />
      <button onClick={(e) => console.log(pictures)}>click for pix</button>
      <button onClick={() => setDisplay(true)}>make it happen</button>
      {display && <Gallery images={pictures}/>}
      <Footer />
  </div>
  )
}

const styles = StyleSheet.create({
  spacer: {
    height: 55
  }
})

export default Portfolio;