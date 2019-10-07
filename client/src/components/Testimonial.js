import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleOpen = () => {
    console.log(this.state.open)
    if (this.state.open) {
      this.setState({open: false})
    } else {
      console.log('setting to true')
      this.setState({open: true})
    }
  }

  boobs = 'boobs';

  render() {
    return (
      <>
        <div className={css(
        this.styles.testimonial,
        this.state.open && this.styles.testimonialOpened
      )}>
        
        <h3 className={css(this.styles.title)}>{'"' + this.props.title + '"'}</h3>

        <h3 className={css(
          this.styles.blurb,
          this.state.open && this.styles.blurbOpened
        )}>
          {this.props.blurb}
        </h3>
        <p className={css(this.styles.author)}>- {this.props.author}</p>
        <div className={css(this.styles.toggleButton)} onClick={this.toggleOpen}>
          {this.state.open ? <p>hide review &#x2716;</p> : <p>show review &#10132;</p>}
        </div>
      </div>
      </>
    )
  }

  styles = StyleSheet.create({
    testimonial: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      marginTop: 25,
      // mobile
      '@media only screen and (max-width: 750px)': {
        height: 100,
        transition: 'height .4s ease-in-out .4s',
      },
      // desktop
      '@media only screen and (min-width: 750px)' : {
        padding: '0px 13px 35px 13px'
      }
    },
    testimonialOpened: {
      '@media only screen and (max-width: 750px)': {
        transition: 'height .4s',
        height: this.props.height
      }
    },
    title: {
      fontSize: 30,
      fontWeight: '300',
      margin: '10px 0px',
      fontStyle: 'italic'
    },
    author: {
      position: 'absolute',
      '@media only screen and (max-width: 750px)': {
        bottom: 20,
        left: 0,
      },
      '@media only screen and (min-width: 750px)': {
        bottom: 0,
        right: 15
      }
    },
    toggleButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      color: '#bdc3c7',
      // desktop
      '@media only screen and (min-width: 750px)' : {
        visibility: 'hidden'
      }
    },
    blurb: {
      position: 'relative',
      padding: 5,
      margin: 0,
      fontSize: 20,
      fontWeight: '200',
      '@media only screen and (max-width: 750px)': {
        opacity: '0',
        transition: 'opacity .4s',
      }
    },
    blurbOpened: {
      '@media only screen and (max-width: 750px)': {
        opacity:'1',
        transitionDelay: '.4s',
      }
    }
  })
}

export default Testimonial;

