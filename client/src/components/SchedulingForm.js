import React from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import { StyleSheet, css } from 'aphrodite';

class SchedulingForm extends React.Component {
  state = {
    date: new Date(),
    moment: '',
    name: '',
    email: ''
  }

  dateToMoment = () => {
    const time = moment(this.state.date);
    this.setState({ moment: time })
  }

  deactivate = ({activeStartDate, date, view }) => date.getDay() === 0
 
  onDateChange = date => this.setState({ date });
  onNameChange = (e) => this.setState({ name: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onDateChange}
          value={this.state.date}
          
        />
        <form>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.onNameChange}
            className={css(styles.textField)}
          />
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.onEmailChange}
            className={css(styles.textField)}
          />
        </form>
        <button onClick={() => console.log(this.state)}>click me</button>
      </div>
    );
  }
}

export default SchedulingForm;

/*
  This component needs to pick a date, make that date in the state, and then pass that date to
  another component that can use it (firebase?)

  I also need to figure out out to deactivate tiles using the prop
*/

const styles = StyleSheet.create({
  textField: {
    padding: 10,
    display: 'block'
  }
})