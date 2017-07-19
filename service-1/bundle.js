import App from '@mwinche/app-1';
import React from 'react';
import ReactDOM from 'react-dom';
import ChannelStore from '@mwinche/state-channels';

const root = document.createElement('div');
const delay = document.createElement('div');

delay.style.position = 'fixed';
delay.style.top = '5px';
delay.style.left = '5px';

document.body.appendChild(root);
document.body.appendChild(delay);

ReactDOM.render(<App store={ChannelStore} />, root);

setTimeout(
  () => import(
      /* webpackChunkName: "Toggle" */
      '@mwinche/toggle'
    )
    .then(Toggle => {
      ReactDOM.render(<Toggle.default />, delay);
    }),
5000);
