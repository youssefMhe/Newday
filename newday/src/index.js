import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Sidebars from "./assets/components/sidebar.js";
import Body from "./assets/components/body";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <Body/>
      <Sidebars/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
