import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App.js';

import ChannelStore from 'state-channels';

storiesOf('App', module)
  .add('default', () => (
    <App store={ChannelStore} />
  ));
