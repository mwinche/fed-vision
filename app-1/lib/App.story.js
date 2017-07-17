import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App.js';

import ChannelStore, { addChannel } from 'state-channels';

ChannelStore.dispatch(addChannel('fed'));
ChannelStore.dispatch(addChannel('bed'));
ChannelStore.dispatch(addChannel('qa'));

storiesOf('App', module)
  .add('default', () => (
    <App store={ChannelStore} />
  ));
