import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import 'tachyons';

import App from './containers/App';
import { register } from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers(searchRobots, requestRobots);
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
register();
