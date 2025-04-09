import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// The objective goal of this assessment is to set up up a basic react project and render a simple "Hello world" message
//in the web browerser.This will test your ability to initialize a react project and understand fundamental React Concept.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

