import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from './components/StateProvider';
import Reducer,{InitialState} from './components/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={Reducer} initialState={InitialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

