import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createClock} from './actions';


class ClockCreator extends Component {

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="input-group">
        <Field name="schedule" label="Enter clock schedule" component={this.renderField}/>
        <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
      </form>
    );
  }

  onSubmit(values) {
    this.props.createClock(values);
  }

  renderField(field) {
    return (
      <div className="form-group">
        <input
          className="form-control"
          placeholder={field.label}
          type="text"
          {...field.input}
        />
      </div>
    );
  }
}

export default reduxForm({
  form: 'CreateClockForm'
})(connect(null, {createClock})(ClockCreator));
