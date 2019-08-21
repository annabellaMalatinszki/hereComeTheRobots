import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h2>Oops, that didn't work out very well now, did it?</h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
