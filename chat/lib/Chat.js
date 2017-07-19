import React from 'react';
import { css } from 'glamor';

const ENTER = 'Enter';

const container = {
  width: 300,
  background: '#f9f9f9',
  border: '1px solid black',
  borderRadius: '3px 3px 0px 0px',
  boxShadow: '2px -2px 5px -1px #333',
};

const chatList = {
  listStyle: 'none',
  margin: 0,
  padding: '0px 8px',
  maxHeight: 400,
  overflowY: 'auto',
};

const chat = {
  padding: '4px 0px',
};

const inputWrapper = {
  padding: 2,
  width: '100%',
  boxSizing: 'border-box',
};

const inputStyles = {
  boxSizing: 'border-box',
  border: '1px solid black',
  width: '100%',
  fontSize: 14,
};

const handleKey = (key, input, handler) => {
  if (key === ENTER) {
    handler && handler(input.value);
    input.value = '';
  }
};

export default ({ chats = [], onNewMessage }) => {
  let input;

  return (<div className={css(container)}>
    <ul className={css(chatList)}>
      {
          chats.map(msg => <li
            data-test-id="chat"
            key={msg}
            className={css(chat)}
          >
            {msg}
          </li>)
        }
    </ul>
    <div className={css(inputWrapper)}>
      <input
        type="text"
        className={css(inputStyles)}
        ref={(_input) => { input = _input; }}
        data-test-id="input"
        onKeyDown={({ key }) => handleKey(key, input, onNewMessage)}
      />
    </div>
  </div>);
};
