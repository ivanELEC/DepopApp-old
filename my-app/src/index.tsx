import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* when app loads - reset likeCount to 0
this is needed because the API for products returns random products each time
 the user enters the app so the previous likes won't persist
in a scenario closer to reality, the product data would be persistent 
for the user via an API or local/session storage*/
sessionStorage.setItem("likeCount","0");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


