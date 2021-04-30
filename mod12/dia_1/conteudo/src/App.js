import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.greenClick = this.greenClick.bind(this);
    this.redClick = this.redClick.bind(this);
    this.blueClick = this.blueClick.bind(this);
    this.colorChange = this.colorChange.bind(this);

    this.state = {
      greenCounter: 0,
      redCounter: 0,
      blueCounter: 0,
      greenButtonStyle: {
        color: 'black',
      },
      blueButtonStyle: {
        color: 'black',
      },
      redButtonStyle: {
        color: 'black',
      },
    }
  }

  colorChange(param) {
    if (param % 2 === 0)
      return {
        color: 'black',
      };
    return {
      color: 'green',
    };
  }

  async blueClick() {
    await this.setState((prevState, _props) => ({
      blueCounter: prevState.blueCounter + 1,
      blueButtonStyle: this.colorChange(this.state.blueCounter)
    }));
    await this.setState((_props) => ({
      blueButtonStyle: this.colorChange(this.state.blueCounter)
    }));
    console.log(this.state.blueButtonStyle);
  }

  async redClick() {
    await this.setState((prevState, _props) => ({
      redCounter: prevState.redCounter + 1,
      redButtonStyle: this.colorChange(this.state.redCounter)
    }));
    await this.setState((_props) => ({
      redButtonStyle: this.colorChange(this.state.redCounter)
    }));
    console.log(this.state.redButtonStyle);
  }

  async greenClick() {
    await this.setState((prevState, _props) => ({
      greenCounter: prevState.greenCounter + 1,
      greenButtonStyle: this.colorChange(this.state.greenCounter)
    }));
    await this.setState((_props) => ({
      greenButtonStyle: this.colorChange(this.state.greenCounter)
    }));
    console.log(this.state.greenButtonStyle);
  }

  render() {
    return (
      <div>
        <div>
          <span className="greenCounter">Verde: {this.state.greenCounter}</span>
          <button style={this.state.greenButtonStyle} onClick={this.greenClick}>Click!</button>
        </div>
        <div>
          <span className="blueCounter">Azul: {this.state.blueCounter}</span>
          <button style={this.state.blueButtonStyle} onClick={this.blueClick}>Click!</button>
        </div>
        <div>
          <span className="redCounter">Vermelho: {this.state.redCounter}</span>
          <button style={this.state.redButtonStyle} onClick={this.redClick}>Click!</button>
        </div>
      </div>
    )
  }
}

export default App;
