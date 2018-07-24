import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTicks} from "./actions";

class TicksShow extends Component {

  componentDidMount() {
    this.timer = setInterval(this._tick, 1000)
  }

  _tick = () => {
    const { ticks } = this.props;
    if(ticks && ticks.length > 0) {
      this.props.fetchTicks(ticks.length);
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const ticks = this.props.ticks.map(t => this.tick2str(t));
    return (
      <div>
        <textarea className="form-control" placeholder="No ticks yet..." value={ticks.join('\n')}/>
      </div>
    );
  }

  tick2str(tick) {
    return `${new Date(tick.time).toLocaleString()} :: ${tick.schedule}`
  }
}

function mapStateToProps(state) {
  return {ticks: state.ticks}
}

export default connect(mapStateToProps, {fetchTicks})(TicksShow)
