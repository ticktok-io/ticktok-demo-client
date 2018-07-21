import React, {Component} from 'react';
import ClockCreator from "./modules/clock/clock_creator";

class App extends Component {
  render() {
    return (
      <div>
        <div className="pos-f-t">
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <h4>Ticktok.io playground</h4>
            </button>
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
