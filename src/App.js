import React, { Component } from 'react';
import styled from 'styled-components';

import withTouchDetect from './withTouchDetect'

const TouchDetectButton = withTouchDetect(
  styled.button`
      color: red;
  `
);

class App extends Component {

  // state = { hasTouch: false }

  handleTouch() {
    // this.setState({ hasTouch: !this.state.hasTouch })
  }
  handleFinalClick() {
    // this.state.hasTouch
    //   ? console.log('opening dropdown')
    //   : console.log('opening link')
  }

  render() {
    console.log(this.props);

    return (
      <div>

        <TouchDetectButton
          onClick={this.handleFinalClick.bind(this)}>
          Click
        </TouchDetectButton>

        <TouchDetectButton
          onClick={this.handleFinalClick.bind(this)}
          onTouchStart={this.handleTouch.bind(this)}
          onTouchEnd={this.handleTouch.bind(this)}
        >
          Touch
        </TouchDetectButton>

        {/* <div>hasTouch: {this.state.hasTouch ? 'true' : 'false'}</div> */}
      </div>
    );
  }
}

export default App;
