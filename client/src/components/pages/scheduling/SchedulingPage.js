import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Calendar from 'react-calendar'

import Header from '../misc/Header';
import firebase from '../../../firebase/firebase';
import clouds from '../../../pics/natural/clouds.jpg';

const Scheduling = () => {

  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeButton, setActiveButton] = useState('');

  const submitForm = () => {
    const entry = {
      date: date.toString(),
      name,
      email,
      phoneNumber,
      preferred: activeButton
    }
    console.log(entry);

    firebase.database().ref('bookings').push(entry).then(() => {
      console.log('submitted that thing');
    })
  }

  return (
    <div className={css(styles.schedulingPage)}>
      <Header />
      <div className={css(styles.spacer)}></div>
      <h1 className={css(styles.pageTitle)}>Let's do business</h1>
      <div className={css(styles.schedulingWindow)}>
        <h2 className={css(styles.title)}>Pick a date and leave some contact information, and I'll get back to you</h2>
        <div className={css(styles.schedulingPageContent)}>
          <Calendar 
            onChange={setDate}
            value={date}
          />
          <div className={css(styles.schedulingForm)}>
            <p className={css(styles.inputLabel)}>Name</p>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={css(styles.textField)}
            />
            <p className={css(styles.inputLabel)}>Email address</p>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={css(styles.textField)}
            />
            <p className={css(styles.inputLabel)}>Phone number</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={css(styles.textField)}
            />
            <p className={css(styles.inputLabel)}>How do you want to be contacted?</p>
            <div className={css(styles.contactOptions)}>
              <button 
                onClick={() => setActiveButton('email')}
                className={css(
                  styles.contactOption,
                  activeButton === 'email' && styles.activeButton
                  )} >
                Email
              </button>
              <button 
                onClick={() => setActiveButton('phone')}
                className={css(
                  styles.contactOption,
                  activeButton === 'phone' && styles.activeButton)}>
                Phone
              </button>
            </div>
            <button onClick={submitForm} className={css(styles.submitButton)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scheduling;

const styles = StyleSheet.create({
  spacer: {
    height: 55
  },
  schedulingPage: {
    background: 'linear-gradient( rgba(0, 0, 0, .2), rgba(0, 0, 0, .4) ), url(' + clouds + ')',
    width: '100vw',
    backgroundPosition: 'top left',
    color: 'white',
    // mobile
    '@media only screen and (max-width: 750px)': {
      backgroundSize: '200vh auto'
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      backgroundSize: '100vw auto',
      minHeight: '100vh'
    }
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 300,
    display: 'block',
    textAlign: 'center',
    // mobile
    '@media only screen and (max-width: 750px)': {
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      margin: '50px 0px',
    }
  },
  schedulingWindow: {
    background: 'rgba(0, 0, 0, .5)',
    width: '90%',
    maxWidth: 800,
    margin: '0 auto',
    marginTop: 30,
    borderRadius: 5,
    // mobile
    '@media only screen and (max-width: 750px)': {
      flexDirection: 'column',
      padding: 10,
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      padding: 20
    }
  },
  schedulingPageContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // mobile
    '@media only screen and (max-width: 750px)': {
      flexDirection: 'column'
    },
    // desktop
    '@media only screen and (min-width: 750px)': {

    }
  },
  schedulingForm: {
    flexGrow: 1,
    // mobile
    '@media only screen and (max-width: 750px)': {
      marginLeft: 0
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      marginLeft: 30
    }
  },
  title: {
    marginTop: 0,
    fontWeight: 300
  },
  inputLabel: {
    marginBottom: 5
  },
  textField: {
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 15,
    boxSizing: 'border-box',
    border: '1px solid black',
    width: '100%'
  },
  contactOptions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  contactOption: {
    flex: '1 1 0',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    ':hover': {
      backgroundColor: '#c0392b',
      color: 'white',
      cursor: 'pointer'
    },
    ':focus': {
      outline: 'none'
    }
  },
  activeButton: {
    backgroundColor: '#c0392b',
    color: 'white'
  },
  submitButton: {
    fontSize: 25,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 5,
    width: '100%',
    ':hover': {
        backgroundColor: '#c0392b',
        color: 'white'
    }
  }
})