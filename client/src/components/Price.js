import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from './Header';

// TODO I want all the styles to be together, so do I have to put the styles above the returned JSX? Sux. I thought stuff was hoisted? 

const Price = (props) => {

  const styles = StyleSheet.create({
    priceContainer: {
      border: '1px solid black',
      background: 'linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) )',
      textAlign: 'center',
      width: 360,
      backgroundColor: props.backgroundColor,
      borderRadius: 10,
      color: 'white'
    },
    head: {
      borderBottom: '1px solid black',
    },
    title: {
      fontSize: 25,
      paddingTop: 20,
    },
    price: {
      fontSize: 20,
    },
    description: {
      fontSize: 15,
      paddingBottom: 40,
      width: '80%',
      margin: '0 auto',
    }
  })

    return (
      <div className={css(styles.priceContainer)}>
        <div className={css(styles.head)}>
          <h2 className={css(styles.title)}>{props.type}</h2>
          <h2 className={css(styles.price)}>{props.price}</h2>
          <h2 className={css(styles.description)}>{props.description}</h2>
        </div>

        <p>All sorts of cool stuf</p>
        <p>Even more features</p>
        <p>wow look a third one</p>
      </div>
    )
}

export default Price;