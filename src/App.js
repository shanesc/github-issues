import React, { Component } from 'react';
import parse from 'parse-link-header';
import './App.scss';
import Header from './components/layout/Header';
import Issues from './components/Issues';
import PageNav from './components/PageNav';

class App extends Component {
  state = {
    issues: [],
    links: {},
  };

  getIssues(url) {
    fetch(url)
      .then((res) => {
        const parsedLinks = parse(res.headers.get('Link'));
        this.setState({ links: parsedLinks });
        return res.json();
      })
      .then((data) => this.setState({ issues: data }))
      .catch((err) => console.error('Error fetching issues: ' + err));
  }

  componentDidMount() {
    this.getIssues(
      'https://api.github.com/repos/facebook/react/issues?per_page=10'
    );
  }

  handleNavClick = (url) => {
    this.getIssues(url);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Issues issues={this.state.issues} />
          <PageNav
            links={this.state.links}
            handleNavClick={this.handleNavClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
