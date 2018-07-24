import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createClock} from './actions';


class ClockCreator extends Component {

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="input-group mb-3">
          <Field className="schedule-input" name="schedule" label="Enter clock schedule" component={this.renderField}/>
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }

  onSubmit(values) {
    this.props.createClock(this.props.appKey, values);
  }

  renderField(field) {
    return (
      <input type="text" className="form-control" placeholder="Enter a clock schedule"
             aria-label="Schedule" aria-describedby="basic-addon2"
             {...field.input}
      />
    );
  }
}

export default reduxForm({
  form: 'CreateClockForm'
})(connect(null, {createClock})(ClockCreator));
