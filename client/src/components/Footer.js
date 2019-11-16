import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => (
  <div className={css(styles.footer)}>
    <div className={css(styles.footerColumn)}>
      <h3>Let's do business!</h3>
      <p>phone: 301-048-2894</p>
      <p>email: hellomoney@makemerich.com</p>
    </div>
    <div className={css(styles.footerColumn)}>
      <h3>We don't do cookies</h3>
      <p>We don't collect any information, we don't care about you enough to do that sort of thing</p>
    </div>
    <div className={css(styles.footerColumn)}>
      <h3>A third thing!</h3>
      <p>All websites use three columns at a time, so it looks cooler this way</p>
      <p>Maybe I'll put a link here to do some rando stuff</p>
    </div>
  </div>
)

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: 'abolute',
    bottom: 0,
    width: '100%',
    margin: 0,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around'
  },
  footerColumn: {
    maxWidth: 360,
    padding: '15px 10px',
  }
})