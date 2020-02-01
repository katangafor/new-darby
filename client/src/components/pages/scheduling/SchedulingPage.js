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
      <div className={css(styles.schedulingPageContent)}>
        <Calendar 
          onChange={setDate}
          value={date}
        />
        <div className={css(styles.schedulingForm)}>
          <h2 className={css(styles.title)}>This is the scheduling page, baby</h2>
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
    height: '100vh',
    backgroundSize: '100vw auto',
    backgroundPosition: 'top left',
    color: 'white'
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 300,
    display: 'block',
    textAlign: 'center',
    margin: '50px 0px',
  },
  schedulingPageContent: {
    width: '90%',
    maxWidth: 800,
    margin: '0 auto',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(0, 0, 0, .5)'
  },
  schedulingForm: {
    marginLeft: 30
  },
  title: {
    marginTop: 0
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