import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    const robots = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(robots => {
        this.setState({ robots });
      });
  }

  render() {
    return (
      <>
        <h1>Here come the robots</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />;
      </>
    );
  }
}

export default App;
