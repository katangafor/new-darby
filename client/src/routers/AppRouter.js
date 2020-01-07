import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../components/pages/home/HomePage';
import RealEstate from '../components/pages/RealEstate'
import PricingPage from '../components/pages/pricing/PricingPage';
import PortfolioPage from '../components/pages/portfolio/PortfolioPage';
import SchedulingPage from '../components/pages/scheduling/SchedulingPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import HiddenSignInPage from '../components/pages/HiddenSignInPage';
import AddPicsPage from '../components/pages/AddPicsPage';
import firebase from '../firebase/firebase';

const AppRouter = () => {

  const [albumNames, setAlbumNames] = useState([]);
  const [albums, setAlbums] = useState([]);

  const fetchAlbumNames = () => {
    let albums = [];
    firebase.database().ref('albumNames').once('value').then((snapshot) => {
      snapshot.forEach((album) => {
        albums.push(album.key);
      })
      setAlbumNames(albums);
    })
  }

  const fetchPictures = () => {
    console.log('trying to fetch pictures...');
    let albums = [];
    firebase.database().ref('albums').once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let album = [];
        childSnapshot.forEach((grandchildSnapshot) => {
          let image = {
            src: grandchildSnapshot.child('downloadURL').val(),
            width: parseInt(grandchildSnapshot.child('width').val()),
            height: parseInt(grandchildSnapshot.child('height').val())
          }
          album.push(image);
        })
        albums.push(album);
      })
      // snapshot.forEach((childSnapshot) => {
      //   let image = {
      //     src: childSnapshot.child('downloadURL').val(),
      //     width: parseInt(childSnapshot.child('width').val()),
      //     height: parseInt(childSnapshot.child('height').val())
      //   }
      //   images.push(image);
      //   setPictures(images);
      // })
      setAlbums(albums)
    })
  }

  useEffect(() => {
    fetchAlbumNames();
    fetchPictures();
  }, [])

  return (
    <Router >
      <>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/portfolio" render={() => <PortfolioPage albumNames={albumNames} albums={albums} />}/>
          <Route path="/scheduling" component={SchedulingPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/hi-darby" component={HiddenSignInPage} />
          <Route path="/add-pics" component={AddPicsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter;