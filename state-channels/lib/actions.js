const ADD_CHANNEL = Symbol('add channel');
const SEND_MESSAGE = Symbol('send message');

const sendMessage = (channel, message) => ({ type: SEND_MESSAGE, message, channel });
const addChannel = channel => ({ type: ADD_CHANNEL, channel });

export {
  ADD_CHANNEL, SEND_MESSAGE,
  addChannel, sendMessage
};
