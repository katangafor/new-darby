import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

import { inflate, deflate } from '../styles/animations';

// background position and background should be inside of the aphrodite thing, so that it can use media queries

// problem: styles is an object, so if it's outside the component, it can't access the props
// solution: make styles into a function that returns an object, and takes one parameter

const CategoryImage = (props) => (
<div 
  className={css(styles.container)}
  style={{
    background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + props.image + ')',
    backgroundPosition: `top right ${props.offset}`
  }}  
>
  <h3 
    className={css(styles.text)}
    onMouseOver={inflate}
    onMouseOut={deflate}
    onClick={() => {props.history.push(`/${props.link}`)}}
    tabIndex="0"
  >
    {props.text}
  </h3>
</div>
)

CategoryImage.propTypes = {
  image: PropTypes.string,
  offset: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    backgroundSize: 'auto 100%',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    marginTop: 0,  
  },
  text: {
    margin: 0,
    position: 'relative',
    top: '70vh',
    textAlign: 'center',
    width: '100%',
    fontSize: 70,
    fontWeight: '200',
    ':hover': {
      cursor: 'pointer'
    }
  }
})

export default withRouter(CategoryImage);