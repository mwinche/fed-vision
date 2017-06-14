import reducers from './reducers.js';
import { ADD_CHANNEL, SEND_MESSAGE } from './actions.js';

const addChannel = reducers[ADD_CHANNEL];
const sendMessage = reducers[SEND_MESSAGE];

describe('reducers', () => {
  describe('adding a channel', () => {
    it('should create a new channel', () => {
      const expected = {
        'new-channel': []
      };

      const actual = addChannel({}, { channel: 'new-channel' });

      expect(actual).toEqual(expected);
    });
  });

  describe('sending a message', () => {
    it('should send a message', () => {
      const action = {
        channel: 'new-channel',
        message: 'Why hello there!'
      };

      const expected = {
        'new-channel': [ 'Why hello there!' ]
      };
      
      const actual = sendMessage({}, action);

      expect(actual).toEqual(expected);
    });
  });
});
