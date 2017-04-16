import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Toggle from './Toggle.js';

storiesOf('Toggle', module)
  .add('default', () => (
    <Toggle />
  ))
  .add('initially on', () => (
    <Toggle on />
  ))
  .add('disabled (off)', () => (
    <Toggle disabled />
  ))
  .add('disabled (on)', () => (
    <Toggle disabled on />
  ));
