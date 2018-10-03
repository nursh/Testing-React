import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: 'Counter value cannot be negative',
    };
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button
          onClick={() => this.setState(prevState => {
            if (prevState.counter < 0) return { counter: 0 };
            return { counter: prevState.counter + 1};
          })}
          data-test="increment-button"
        >
          Increment counter
        </button>
        <button
          onClick={() => this.setState(prevState => ({ counter: prevState.counter - 1}))}
          data-test="decrement-button"
        >
          Decrement counter
        </button>

        {(this.state.counter < 0) && 
          <p
            style={{ color: "red"}}
            data-test="error-message"
          >
            {this.state.error}
          </p>
        }
      </div>
    );
  }
}

export default App;
