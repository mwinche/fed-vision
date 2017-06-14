import { ADD_CHANNEL, SEND_MESSAGE } from './actions.js';

export default {
  [ADD_CHANNEL]: (state = {}, { channel }) => {
    return { [channel]: [], ...state };
  },
  [SEND_MESSAGE]: (state = {}, { channel, message }) => {
    const messages = state[channel] || [];

    return {
      ...state,
      [channel]: messages.concat(message)
    };
  },
};
