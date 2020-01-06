import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Info = (props) => {

  const styles = StyleSheet.create({
    info: {
      textAlign: 'center',
      fontSize: 20,
      width: '80%',
      margin: '0 auto',
      marginBottom: 50,
      color: props.color
    },
    first: {
      fontSize: 40,
      fontWeight: '300'
    },
    second: {
      fontSize: 20,
      fontWeight: '200'
    }
  })

  return (
    <div className={css(styles.info)}>
      <h3 className={css(styles.first)}>{props.first}</h3>
      <h3 className={css(styles.second)}>{props.second}</h3>
  </div>
  )
}

export default Info;