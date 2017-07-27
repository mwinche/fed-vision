import React from 'react';
import { mount } from 'enzyme';
import Chat from './Chat.js';

const ENTER = 'Enter';

describe(`<Chat />`, () => {
  let wrapper;

  const type = text => {
    wrapper
      .find('[data-test-id="input"]')
      .getDOMNode().value = text;

    wrapper
      .find('[data-test-id="input"]')
      .simulate('keyDown', { key: ENTER });

    wrapper.update();
  };

  beforeEach(() => wrapper = mount(<Chat />));

  it(`should start with no chats`, () => {
    expect(
      wrapper
        .find('[data-test-id="chat"]')
    ).toHaveLength(0);
  });

  it(`should take chats in props`, () => {
    wrapper = mount(<Chat chats={['Hi there', 'How are you?']} />);

    expect(
      wrapper
        .find('[data-test-id="chat"]')
    ).toHaveLength(2);

    expect(
      wrapper.find('[data-test-id="chat"]').at(0).text()
    ).toBe('Hi there');

    expect(
      wrapper.find('[data-test-id="chat"]').at(1).text()
    ).toBe('How are you?');
  });

  it(`should fire the callback on enter`, () => {
    let newMessage = null;

    wrapper = mount(<Chat onNewMessage={msg => newMessage = msg} />);

    type('This is the first message');

    expect(newMessage).toBe('This is the first message');
  });

  it(`should add clear the chat on enter`, () => {
    let newMessage = null;

    wrapper = mount(<Chat onNewMessage={msg => newMessage = msg} />);

    type('This is the first message');
    type('This is the second message');

    expect(newMessage).toBe('This is the second message');
  });
});
