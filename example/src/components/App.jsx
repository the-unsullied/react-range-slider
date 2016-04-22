import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RangeSlider from 'unsullied-react-range-slider';

export const App = React.createClass({
  getInitialState: function() {
    return {
      actualVal: 0
    }
  },
  changed: function(actualVal) {
    this.setState({ actualVal });
  },
  render: function() {
    return <div className="section">
      <a href="https://github.com/the-unsullied/react-range-slider">
        <img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" />
      </a>
      <h1 className="margin-bottom">Range Slider!</h1>

      <RangeSlider
        className="margin-bottom"
        max={500}
        onChange={this.changed}
        value={this.state.actualVal} />

      <div className="margin-bottom">
        My value is: <span className="bold">{this.state.actualVal}</span>
      </div>

      <div>
        Download via npm:
      </div>
      <div className="section-code">
        npm install --save-dev unsullied-react-range-slider
      </div>
    </div>
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
