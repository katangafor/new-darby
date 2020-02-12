import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../misc/Header';
import HomeImage from './HomeImage';
import Testimonial from './Testimonial';
import CategoryImage from '../../pages/home/CategoryImage';

// TODO make the category images into links

const HomePage = () => {

  return (
    <>
    <Header />
    <HomeImage />
    {/* <div className={css(styles.testimonialContainer)}>
      <Testimonial
        title="Wow, so awesome"
        blurb="Dang I gotta say, Darby took a picture of my face two weeks ago, and I've sold over 950 houses
        since then. I've also been offered 100 jobs, and I took all of them, and now I have enough money
        to buy a helicopter every day! My entire life changed for the better as soon as Darby took a
        picture of my face, so if you don't get a picture taken of your face, you will regret it until
        the day you die."
        height="415px"
        author="Shillingsworth Buxaplenty"
      />
      <Testimonial
        title="&#9733;&#9733;&#9733;&#9733;&#9733;"
        blurb="Dang I gotta say, Darby took a picture of my face two weeks ago, and I've sold over 950 houses
        since then. I've also been offered 100 jobs, and I took all of them, and now I have enough money
        to buy a helicopter every day! My entire life changed for the better as soon as Darby took a
        picture of my face, so if you don't get a picture taken of your face, you will regret it until
        the day you die."
        height="415px"
        author="Lord the Sir Duke Highley-o"
      />
      <Testimonial
        title="Darby made me rich"
        blurb="Dang I gotta say, Darby took a picture of my face two weeks ago, and I've sold over 950 houses
        since then. I've also been offered 100 jobs, and I took all of them, and now I have enough money
        to buy a helicopter every day! My entire life changed for the better as soon as Darby took a
        picture of my face, so if you don't get a picture taken of your face, you will regret it until
        the day you die."
        height="415px"
        author="Fenis"
      />
    </div> */}
    
    <div className={css(styles.info)}>
      <h3 className={css(styles.infoTitle)}>Im Darby and I don’t like boring photos.</h3>
      <h3 className={css(styles.infoContent)}>
        I believe that great photos don’t try to fit in. 
        Great photos tell a story - your story - and make you stand out. 
      </h3>
      <h3 className={css(styles.infoContent)}>
        I'm an east coast transplant now based in LA, and I don’t take California’s 
        vibrant landscapes and culture for granted. Photography is my way of connecting 
        with the amazing people and places around me.
      </h3>
      <h3 className={css(styles.infoContent)}>
        Life isn’t a Hallmark card: it’s much more dynamic and exciting. And your photos 
        - whether they’re for an online profile, an event, or a brand - should be too.
      </h3>
      <h3 className={css(styles.infoContent)}>
      Contact me with any inquiries, or follow along on instagram, <a href="https://www.instagram.com/elisadarbster/?hl=en" style={{textDecoration: 'none'}}>@elisadarbster</a>.
      </h3>
    </div>
    <div className={css(styles.featuresStrip)}>
      <div className={css(styles.feature)}>
        <h1>Hi-res Downloads</h1>
        <img 
          src={require('../../../icons/mountains.svg')} 
          alt="a pretty mountain" 
          className={css(styles.featureImage)} 
          style={{height: 150}}
        />
        <p className={css(styles.featureText)}>
          All clients get the same access to both high-resolution and compressed copies of 
          all photos: no more paying a premium for the best version of yourself.
        </p>
      </div>
      <div className={css(styles.feature)}>
        <h1>Affordable Pricing</h1>
        <img 
          src={require('../../../icons/money.svg')} 
          alt="a pretty mountain" 
          className={css(styles.featureImage)}
          style={{height: 100, marginTop: 25, marginBottom: 25}}
        />
        <p className={css(styles.featureText)}>
          Make your big break without breaking the bank. Professional photography for the people!
        </p>
      </div>
      <div className={css(styles.feature)}>
        <h1>Expert Editing</h1>
        <img 
          src={require('../../../icons/edits.svg')} 
          alt="a pretty mountain" 
          className={css(styles.featureImage)} 
          style={{height: 110, marginTop: 20, marginBottom: 20}}
        />
        <p className={css(styles.featureText)}>
          All photos are edited using the latest and greatest tools and techniques. Additonal retouches
          available at no extra cost.
        </p>
      </div>
    </div>
    <CategoryImage 
      image={require('../../../pics/natural/birds.jpg')} 
      offset="0px" 
      text="portfolio"
      link="portfolio"
    />
    <CategoryImage 
      image={require('../../../pics/home/banana-split.jpg')} 
      offset="0px" 
      text="schedule a session"
      link="scheduling"
    />
    {/* <Footer /> */}
  </>
  )
}

export default HomePage;

const styles = StyleSheet.create({
  
  info: {
    textAlign: 'center',
    fontSize: 20,
    width: '80%',
    margin: '0 auto',
    marginBottom: 50,
    maxWidth: 700
  },
  infoTitle: {
    fontSize: 40,
    fontWeight: '300'
  },
  infoContent: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'left'
  },
  testimonialContainer: {
    '@media only screen and (min-width: 750px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  },
  moneySigns: {
    height: 200,
    width: 300
  },
  featuresStrip: {
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 60,
    marginBottom: 50,
    '@media only screen and (max-width: 750px)': {
      flexDirection: 'column'
    },
    '@media only screen and (min-width: 750px)': {
      justifyContent: 'space-around',
    }
  },
  tagLine: {
    textAlign: 'center',
    fontWeight: 300,
    fontSize: 45
  },
  feature: {
    textAlign: 'center',
    border: `2px solid #16a085`,
    borderRadius: 10,
    boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.4)',
    transition: 'all .2s',
    position: 'relative',
    bottom: 0,
    ':hover': {
      bottom: 10,
      boxShadow: '5px 13px 5px 0px rgba(0, 0, 0, 0.4)',
    },
    '@media only screen and (max-width: 750px)': {
      width: '95%',
      margin: '0 auto',
      marginBottom: 45
    },
    '@media only screen and (min-width: 750px)': {
      width: '30vw',
    }
  },
  featureImage: {
    // height: 200
  },
  featureText: {
    maxWidth: '90%',
    margin: '0 auto',
    padding: '30px 0px',
    fontSize: 20
  }
})
