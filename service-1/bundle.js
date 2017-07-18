import App from 'app-1';
import React from 'react';
import ReactDOM from 'react-dom';
import ChannelStore from 'state-channels';

ReactDOM.render(<App store={ChannelStore} />, document.getElementById('root'));

setTimeout(
  () => import(
      /* webpackChunkName: "Toggle" */
      'widget-1'
    )
    .then(Toggle => ReactDOM.render(<Toggle />, document.getElementById('delay'))),
5000);
