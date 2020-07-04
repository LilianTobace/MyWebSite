import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Pages/App';
import '../src/Webroot/css/main.css';
import '../src/Webroot/css/noscript.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
