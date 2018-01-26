import React, { Component } from 'react';
import styled from 'styled-components';

import withTouchDetect from './withTouchDetect'

const TouchDetectButton = withTouchDetect(styled.button`
    color: ${ props => (props.touchStart ? 'red' : 'white')};
  `
);

class App extends Component {
  handleClick = () => {
    this.props.touchStart
      ? console.log('supposed to get dropdown')
      : console.log('supposed to get navigation')
  }

  render() {
    console.log(this.props.touchStart);

    return (
      <div>
        <TouchDetectButton
          onClick={this.handleClick}
          className="poop">
          Touch
        </TouchDetectButton>

        {/* <div>hasTouch: {this.props.touchStart ? 'true' : 'false'}</div> */}
      </div>
    );
  }
}

export default App;
