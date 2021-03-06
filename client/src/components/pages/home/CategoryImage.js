import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { withRouter } from 'react-router-dom';

import { inflate, deflate } from '../../../styles/animations';

// background position and background should be inside of the aphrodite thing, so that it can use media queries

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
    backgroundSize: '100% auto',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    marginTop: 0,  
  },
  text: {
    margin: 0,
    display: 'inline-block',
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