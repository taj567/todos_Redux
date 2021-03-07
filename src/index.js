import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore }  from 'redux'
import todoReducer from './Actions/Reducer'
import { Provider } from 'react-redux'


const store = createStore(todoReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


