import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import DatePicker from './SchedulingForm';
import Header from '../misc/Header';

const Scheduling = () => (
  <>
    <Header />
    <div className={css(styles.spacer)}></div>
    <h1>This is the scheduling page, baby</h1>
    <DatePicker />
  </>
)

export default Scheduling;

const styles = StyleSheet.create({
  spacer: {
    height: 55
  }
})