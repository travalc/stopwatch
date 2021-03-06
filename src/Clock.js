import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  render() {
    return (
      <div className="Clock">
        <span className="Clock-minutes">{this.leading0(this.props.minutes)}</span>
        <span className="Clock-seconds">:{this.leading0(this.props.seconds)}</span>
      </div>
    )
  }
}

export default Clock;
