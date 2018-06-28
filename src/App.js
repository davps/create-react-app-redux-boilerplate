import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import BasicContainer from './containers/BasicContainer';

/* eslint-disable react/jsx-filename-extension */
const App = () => (
  <Provider store={store}>
    <BasicContainer />
  </Provider>
);
/* eslint-enable */

export default App;
