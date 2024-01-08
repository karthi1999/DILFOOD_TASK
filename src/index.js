'use client'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default index
