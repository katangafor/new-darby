import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import firebase from '../../../firebase/firebase';
import Header from '../misc/Header';

const HiddenSchedulePage = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    let tempBookings = [];
    firebase.database().ref(`bookings`).once('value').then((snapshot) => {
      snapshot.forEach((childSnap) => {
        tempBookings.push(childSnap.val());
      })
      setBookings(tempBookings);
    })
  }, [])

  return (
    <div>
      <Header />
      <div className={css(styles.spacer)}></div>
      {bookings.map((booking) => {
        return <div className={css(styles.booking)}>
          <h2>{booking.name}</h2>
          <h3>{booking.date.substring(0, 15)}</h3>
          <p>Email: {booking.email}</p>
          <p>Phone: {booking.phoneNumber}</p>
          <p>Prefers to be contacted by: {booking.preferred}</p>
        </div>
      })}
    </div>
  )
}

export default HiddenSchedulePage;

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
  booking: {
    width: '90%',
    margin: '0 auto',
    marginTop: 20,
    borderBottom: '1px solid gray'
  }
})