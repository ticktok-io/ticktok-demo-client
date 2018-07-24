import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClockCreator from "./modules/clock/clock_creator";
import TicksShow from "./modules/tick/ticks_show";

class App extends Component {
  render() {
    const key = new URLSearchParams(this.props.location.search).get('key');
    return (
      <div>
        <div className="pos-f-t">
          <nav className="navbar navbar-dark bg-dark">
            <h4>Ticktok.io playground</h4>
          </nav>
          <div className="main">
            <ClockCreator appKey={key}/>
            <TicksShow/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(App);
