import React, { useState, useEffect } from 'react';

import firebase from '../../../firebase/firebase';

const HiddenSchedulePage = () => {

  const [bookings, setBookings] = useState('');

  useEffect(() => {
    let tempBookings = [];
    firebase.database().ref(`bookings`).once('value').then((snapshot) => {
      snapshot.forEach((childSnap) => {
        console.log(childSnap.val());
      })
    }) 
  }, [])

  return (
    <div>

    </div>
  )
}

export default HiddenSchedulePage;