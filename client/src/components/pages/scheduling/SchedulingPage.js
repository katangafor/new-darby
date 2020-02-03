import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Calendar from 'react-calendar'

import Header from '../misc/Header';
import clouds from '../../../pics/natural/clouds.jpg';

const Scheduling = () => {

  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
              <button className={css(styles.contactOption)}>Email</button>
              <button className={css(styles.contactOption)}>Phone</button>
            </div>
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
      backgroundSize: 'auto 100vh',
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
    padding: 10,
    borderRadius: 5,
  },
  schedulingPageContent: {

    display: 'flex',
    justifyContent: 'space-between',
    // mobile
    '@media only screen and (max-width: 750px)': {
      flexDirection: 'column'
    },
    // desktop
    '@media only screen and (min-width: 750px)': {

    }
  },
  schedulingForm: {
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
    display: 'flex'
  },
  contactOption: {
    flex: '1 1 0',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 5,
    fontSize: 20,
    padding: 10,
    marginRight: 10,
    ':hover': {
      backgroundColor: '#bdc3c7',
      cursor: 'pointer'
    }
  }
})