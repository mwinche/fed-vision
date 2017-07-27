import App from '@mwinche/app-1';
import React from 'react';
import ReactDOM from 'react-dom';
import ChannelStore, { addChannel, sendMessage } from '@mwinche/state-channels';

const initialChannels = ['fed', 'bed'];

initialChannels
  .forEach(channel => ChannelStore.dispatch(addChannel(channel)));

const createElement = () => {
  const element = document.createElement('div');
  document.body.appendChild(element);

  return element;
}

const root = document.getElementById('root') || createElement();
const delay = document.getElementById('delay') || createElement();

delay.style.position = 'fixed';
delay.style.top = '5px';
delay.style.left = '5px';

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
