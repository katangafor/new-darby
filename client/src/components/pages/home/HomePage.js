import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../misc/Header';
import HomeImage from './HomeImage';
import Testimonial from './Testimonial';
import Info from '../misc/Info';
import CategoryImage from '../../pages/home/CategoryImage';
import Footer from '../misc/Footer';
import firebase from '../../../firebase/firebase';
import { userInfo } from 'os';

// TODO make the category images into links

const HomePage = () => {

  return (
    <>
    <Header />
    <HomeImage />
    <div className={css(styles.testimonialContainer)}>
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
    </div>
    
    <div className={css(styles.info)}>
      <h3 className={css(styles.infoTitle)}>Hi, I’m Darby, an LA based photographer. </h3>
      <h3 className={css(styles.infoContent)}>
        As an East Coast transplant, I don’t take California’s vibrant landscapes and culture for granted. 
        Photography is my way of connecting with and appreciating the people and places around me. 
      </h3>
      <h3 className={css(styles.infoContent)}>
        My body of work consists of both commercial and personal projects, though not specializing in any 
        one niche. Rather, my affinity for travel, people, and unique experiences has led me to work mainly 
        in portraiture, adventure photography, and lifestyle/branding work. But I love it all.
      </h3>
      <h3 className={css(styles.infoContent)}>
      Contact me with any inquiries, or follow along on instagram, @elisadarbster.
      </h3>
    </div>
    <CategoryImage 
      image={require('../../../pics/home/buddy.jpg')} 
      offset="-400px" 
      text="real estate"
      link="real-estate"
    />
    <CategoryImage 
      image={require('../../../pics/home/banana-split.jpg')} 
      offset="-110px" 
      text="natural"
      link="natural"
    />
    <CategoryImage 
      image={require('../../../pics/home/gucci.jpg')} 
      offset="-450px" 
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
    fontWeight: '200',
    textAlign: 'left'
  },
  testimonialContainer: {
    '@media only screen and (min-width: 750px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  }
})
