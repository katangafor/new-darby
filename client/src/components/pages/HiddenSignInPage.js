import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

import firebase from '../../firebase/firebase';

const HiddenSignInPage = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log('nailed it');
      history.push('/add-pics');
    })
  }

  return (
    <>
      <input 
        className={css(styles.textField)}
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
      />
      <input
        className={css(styles.textField)}
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
      />
      <button className={css(styles.textField)} onClick={signIn}>Sign in!</button>
    </>
  )
}

export default withRouter(HiddenSignInPage);

const styles = StyleSheet.create({
  textField: {
    fontSize: 30,
    width: 400,
    margin: '0 auto',
    marginTop: 20,
    padding: 10,
    display: 'block'
  }
})