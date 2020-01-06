import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import firebase from '../../../firebase/firebase';

import Header from '../misc/Header';
import Info from '../misc/Info';
import Gallery from '../misc/Gallery';
import Footer from '../misc/Footer';
import AlbumContent from './AlbumContent';

const PortfolioPage = () => {

  const [pictures, setPictures] = useState('');
  const [albumNames, setAlbumNames] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    fetchAlbumNames();
  }, [])

  // pass this down as an argument for the album content 
  const fetchPictures = (albumName) => {
    console.log('trying to fetch pictures...');
    let images = [];
    firebase.database().ref(albumName).once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let image = {
          src: childSnapshot.child('downloadURL').val(),
          width: parseInt(childSnapshot.child('width').val()),
          height: parseInt(childSnapshot.child('height').val())
        }
        images.push(image);
        setPictures(images);
      })
      setPictures(images);
    })
  }

  const fetchAlbumNames = () => {
    let albums = [];
    firebase.database().ref('albums').once('value').then((snapshot) => {
      snapshot.forEach((album) => {
        albums.push(album.key);
      })
      setAlbumNames(albums);
    })
  }  

  return (
    <div>
      <Header />
      <div className={css(styles.spacer)}></div>
      <Info
        first="Look on my works, ye Mighty, and despair"
      />
      <div className={css(styles.albumsContainer)}>
        {albumNames.map((albumName) => {
          return <AlbumContent 
            albumName={albumName} 
            key={albumName} 
            selected={selected} 
            setSelected={setSelected}
            pictures={pictures}
            fetchPictures={fetchPictures}
          />
        })}
      </div>
      {/* <button onClick={(e) => console.log(pictures)}>click for pix</button>
      <button onClick={() => setDisplay(true)}>make it happen</button>
      {display && <Gallery images={pictures}/>} */}
      <Footer />
  </div>
  )
}

export default PortfolioPage;

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
  albumsContainer: {
  }
})