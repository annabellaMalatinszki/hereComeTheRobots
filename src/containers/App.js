import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots)
  };
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { onSearchChange, searchField } = this.props;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <>
        <h1>Here come the robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />;
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
