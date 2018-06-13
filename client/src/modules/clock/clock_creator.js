import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerClock } from './actions';


class ClockCreator extends Component {

  constructor(props) {
    super(props);

    this.state = { schedule: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.schedule);
    this.setState({ schedule: '' });
  }

  onInputChange(event) {
    this.setState({ schedule: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a valid schedule"
          className="form-control"
          value={this.state.schedule}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Create</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: registerClock }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClockCreator);
