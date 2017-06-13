import React from 'react';
import { storiesOf } from '@storybook/react';
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
  ))
  .add('override active color', () => (
    <Toggle on activeColor="green" />
  ))
  .add('override inactive color', () => (
    <Toggle inactiveColor="red" />
  ))
  .add('override handle color', () => (
    <Toggle handleColor="gray" />
  ));
