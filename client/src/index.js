import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';

import{ Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import cards from './reducers';
import ReduxThunk from 'redux-thunk';
import { createDevTools } from 'redux-devtools'


//reducers --------------
let store = createStore(
  cards, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
