import React from 'react';
import {hydrate, render} from "react-dom";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}


serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
