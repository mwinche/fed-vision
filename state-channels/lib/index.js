import { createStore } from 'redux';

import reducers from './reducers';

const channels = (state = {}, action) => {
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;
};

export const factory = () => createStore(channels);

export default factory();

export { addChannel, sendMessage } from './actions.js';
