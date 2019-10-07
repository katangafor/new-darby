import React from 'react';
import { StyleSheet, css } from 'aphrodite'; 
import { Link, withRouter } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      menuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const goingUp = prevScrollpos > currentScrollPos;
    const toppedOut = currentScrollPos < 40;
    const visible = (goingUp || toppedOut) && !this.state.menuOpen;
    
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.setState({
        visible: true,
        menuOpen: false
      });
    } else {
      this.setState({menuOpen: true});
    }
  }

  goHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={
        css(
          styles.header, 
          !this.state.visible && styles.headerIsHidden,
          this.state.menuOpen && styles.menuIsOpen)
        }
      >
        <h2 className={css(styles.headersLogo)} onClick={this.goHome}>DarbyPix</h2>
        <ul className={css(styles.menu)}>
          <li className={css(styles.menuItem)}><Link to="/portraits" className={css(styles.menuItemLink)}>Portraits</Link></li>
          <li className={css(styles.menuItem)}><Link to="/natural" className={css(styles.menuItemLink)}>Natural</Link></li>
          <li className={css(styles.menuItem)}><Link to="/social-media" className={css(styles.menuItemLink)}>Social Media</Link></li>
          <li className={css(styles.menuItem)}><Link to="/scheduling" className={css(styles.menuItemLink)}>Scheduling</Link></li>
          <li className={css(styles.menuItem)}><Link to="/pricing" className={css(styles.menuItemLink)}>Pricing</Link></li>
        </ul>
        <div className={css(styles.headersBurgerIcon)}>
        <HamburgerMenu
          className={css(styles.headersBurgerIcon)}
          isOpen={this.state.menuOpen}
          menuClicked={this.toggleMenu}
          width={20}
          height={16}
          strokeWidth={2}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={.6}
        />
        </div>
        
      </div>
    )
  }
}

const styles = StyleSheet.create({
  'header': {
    color: 'white',
    background: 'rgba(0, 0, 0, 1);',
    position: 'fixed',
    width: '100%',
    textAlign: 'left',
    zIndex: 100,
    // mobile
    '@media only screen and (max-width: 750px)': {
      height: '355px',
      top: -300,
      transition: 'top .6s',
    },
    //desktop
    '@media only screen and (min-width: 750px)': {
      height: 55
    }
  },
  headerIsHidden: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      top: -355,
    }
  },
  menuIsOpen: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      top: 0
    }
  },
  headersLogo: {
    fontSize: 42,
    fontWeight: '200',
    padding: 0,
    margin: 5,
    display: 'inline',
    ':hover': {
      cursor: 'pointer'
    },
    // mobile
    '@media only screen and (max-width: 750px)': {
      position: 'absolute',
      bottom: 0,
    }
  },
  headersBurgerIcon: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      position: 'absolute',
      right: 20,
      bottom: 20
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      visibility: 'hidden'
    }
  },
  menu: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      listStyle: 'none',
      textAlign: 'center',
      fontSize: 40,
      marginTop: 0,
      padding: 0
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      position: 'absolute',
      right: 20,
      top: 15,
      height: '100%',
      margin: 0,
      padding: 0,
      display: 'inline',
      fontSize: 15,
      
    }
  },
  menuItem: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      padding: 0,
      borderBottom: '1px solid white',
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      display: 'inline',
    }
  },
  menuItemLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '300',

    // mobile
    '@media only screen and (max-width: 750px)': {
      display: 'block',
      padding: 5,
      width: '100%',
      ':hover': {
        backgroundColor: 'white',
        color: 'black'
      }
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      position: 'relative',
      bottom: '12px',
      padding: '15px 10px 17px 10px',
      display: 'inline-block',
      transition: 'transform .3s ease-in-out',
      ':hover': {
        transform: 'translate(0px, 7px)'
      }
    }
  }
})

export default withRouter(Header);

