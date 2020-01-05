import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header';
import HomeImage from '../HomeImage';
import Testimonial from '../Testimonial';
import Info from '../Info';
import CategoryImage from '../CategoryImage';
import Footer from '../Footer';
import firebase from '../../firebase/firebase';
import { userInfo } from 'os';

// TODO make the category images into links

const Home = () => {

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
    
    <Info 
      first="Hi, I'm Darby."
      second="I take very pretty pictures as a professional photographer 
      in the Santa Monica area. There are many reasons why I am the best one, 
      including the following: I am cheaper, less stupid, and more smart than the competition. "
    />
    <CategoryImage 
      image={require('../../pics/home/buddy.jpg')} 
      offset="-400px" 
      text="real estate"
      link="real-estate"
    />
    <CategoryImage 
      image={require('../../pics/home/banana-split.jpg')} 
      offset="-110px" 
      text="natural"
      link="natural"
    />
    <CategoryImage 
      image={require('../../pics/home/gucci.jpg')} 
      offset="-450px" 
      text="schedule a session" 
      link="scheduling"
    />
    <Footer />
  </>
  )
}

export default Home;

const styles = StyleSheet.create({
  testimonialContainer: {
    '@media only screen and (min-width: 750px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  }
})
