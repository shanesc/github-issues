import React, { Component } from 'react';
import './App.scss';
import Issues from './components/Issues';

class App extends Component {
  state = {
    issues: [],
  };

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((res) => res.json())
      .then((data) => this.setState({ issues: data.slice(0, 20) }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Issues issues={this.state.issues} />
        </div>
      </div>
    );
  }
}

export default App;
