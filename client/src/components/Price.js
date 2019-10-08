import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from './Header';

// TODO I want all the styles to be together, so do I have to put the styles above the returned JSX? Sux. I thought stuff was hoisted? 

const Price = (props) => {

  const styles = StyleSheet.create({
    priceContainer: {
      border: '1px solid #bdc3c7',
      //background: 'linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) )',
      background: 'white',
      textAlign: 'center',
      width: 360,
      backgroundColor: props.backgroundColor,
      borderRadius: 10,
      color: 'black',
      height: 'auto'
    },
    head: {
      borderBottom: '1px solid #bdc3c7',
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
    },
    features: {
      padding: 0,
      margin: 0
    },
    feature: {
      listStyle: 'none',
      padding: '20px 5px',
      borderBottom: '1px solid #bdc3c7',
      width: '70%',
      margin: '0 auto'
    }
  })

    return (
      <div className={css(styles.priceContainer)}>
        <div className={css(styles.head)}>
          <h2 className={css(styles.title)}>{props.type}</h2>
          <h2 className={css(styles.price)}>{props.price}</h2>
          <h2 className={css(styles.description)}>{props.description}</h2>
        </div>

        <ul className={css(styles.features)}>
          {props.features.map((feature) => {
            return <li className={css(styles.feature)}>{feature}</li>
          })}
        </ul>
      </div>
    )
}

export default Price;