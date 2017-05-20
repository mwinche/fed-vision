import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Chat from './Chat.js';

storiesOf('Chat', module)
  .add('default', () => (
    <Chat />
  ));
