import React, { Component } from 'react';
import './App.css';

const ProgressBar = ({ width, height, minValue, maxValue, currentValue, firstHalfColor, secondHalfColor }) => {
  const range = maxValue - minValue;
  const percentageAsDecimal = (range - currentValue) / range;
  const secondHalfWidth = width * percentageAsDecimal;
  const firstHalfWidth = width - secondHalfWidth;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect fill={firstHalfColor} x={0} y={0} width={firstHalfWidth} height={height} />
        <rect fill={secondHalfColor} x={firstHalfWidth} y={0} width={secondHalfWidth} height={height} />
      </g>
    </svg>
  );
}

ProgressBar.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  minValue: React.PropTypes.number.isRequired,
  maxValue: React.PropTypes.number.isRequired,
  currentValue: React.PropTypes.number.isRequired,
  firstHalfColor: React.PropTypes.string.isRequired,
  secondHalfColor: React.PropTypes.string.isRequired,
};

ProgressBar.defaultProps = {
  width: 600,
  height: 40,
  minValue: 0,
  maxValue: 100,
  currentValue: 50,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 50,
      percentage: 60,
      minValue: 0,
      maxValue: 100,
      currentValue: 50,
      firstHalfColor: "#D0011B",
      secondHalfColor: "#50E3C2",
    };
  }

  render() {
    return (
      <div className="App">
        <ProgressBar {...this.state} />
        <div>
          <label>
            Minimum Value
            <input
              type="range"
              min={0}
              value={this.state.minValue}
              onChange={e => this.setState({ minValue: +e.target.value })}
            />
          </label>
          <label>
            Current Value
            <input
              type="range"
              min={this.state.minValue}
              max={this.state.maxValue}
              value={this.state.currentValue}
              onChange={e => this.setState({ currentValue: +e.target.value })}
            />
          </label>
          <label>
            Maximum Value
            <input
              type="range"
              min={this.state.minValue}
              value={this.state.maxValue}
              onChange={e => this.setState({ maxValue: +e.target.value })}
            />
          </label>
          <label>
            First Half Color
            <input
              type="color"
              value={this.state.firstHalfColor}
              onChange={e => this.setState({ firstHalfColor: e.target.value })}
            />
          </label>
          <label>
            Second Half Color
            <input
              type="color"
              value={this.state.secondHalfColor}
              onChange={e => this.setState({ secondHalfColor: e.target.value })}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
