import { createStore } from 'redux';

import { ADD_CHANNEL, SEND_MESSAGE } from './actions.js';
import reducers from './reducers.js';

const channels = (state = {}, action) => {
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;
}

export const factory = () => {
  return createStore(channels);
};

export default factory();

export { addChannel, sendMessage } from './actions.js';
