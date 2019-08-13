import React from 'react';
import CardList from './CardList';

class App extends React.Component {
  render() {
    return (
      <CardList
        robots={[
          {
            name: 'Donald Trump',
            email: 'the.donald@trump.com'
          },
          {
            name: 'Mike Pence',
            email: 'mike.pence@whitehouse.org'
          }
        ]}
      />
    );
  }
}

export default App;
