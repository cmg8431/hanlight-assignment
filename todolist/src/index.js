import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './GlobalStyled';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
