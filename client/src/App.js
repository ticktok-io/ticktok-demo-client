import React, {Component} from 'react';
import ClockCreator from "./modules/clock/clock_creator";

class App extends Component {
  render() {
    return (
      <div>
        <div className="pos-f-t">
          <nav className="navbar navbar-dark bg-dark">
              <h4>Ticktok.io playground</h4>
          </nav>
        </div>
        < div>
          <ClockCreator/>
        </div>
      </div>
    );
  }
}

export default App;
