// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let phrase = ''
    if(this.state.secondsLeft === 0) {
      return phrase = "Boom!"
    } else {
      return phrase = `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return (
      <p>{phrase}</p>
    )
  }

}
