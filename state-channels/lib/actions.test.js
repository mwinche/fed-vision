import {
  addChannel, sendMessage,
  ADD_CHANNEL, SEND_MESSAGE
} from './actions.js';

describe('action creators', () => {
  describe('adding a channel', () => {
    it('should create a new channel', () => {
      const expected = {
        type: ADD_CHANNEL,
        channel: 'new-channel'
      };

      const actual = addChannel('new-channel');

      expect(actual).toEqual(expected);
    });
  });

  describe('sending a message', () => {
    it('should send a message', () => {
      const expected = {
        type: SEND_MESSAGE,
        channel: 'new-channel',
        message: 'Why hello there!'
      };

      const actual = sendMessage('new-channel', 'Why hello there!');

      expect(actual).toEqual(expected);
    });
  });
});
