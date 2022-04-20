import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Reducer } from './store/Reducer';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


