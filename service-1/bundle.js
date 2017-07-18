import App from 'app-1';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(
  () => import('widget-1')
    .then(Toggle => ReactDOM.render(<Toggle />, document.getElementById('delay'))),
5000);
