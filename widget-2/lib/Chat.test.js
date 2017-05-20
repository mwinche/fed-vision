import React from 'react';
import { mount } from 'enzyme';
import Chat from './Chat.js';

const ENTER = 'Enter';

describe(`<Chat />`, () => {
  let wrapper;

  const type = text => {
    wrapper.instance().input.value = text;
    wrapper
      .find('[data-test-id="input"]')
      .simulate('keyDown', { key: ENTER });
  };

  beforeEach(() => wrapper = mount(<Chat />));

  it(`should start with no chats`, () => {
    expect(
      wrapper
        .find('[data-test-id="chat"]')
    ).toHaveLength(0);
  });

  it(`should add chats on enter`, () => {
    type('This is the first message');

    expect(
      wrapper.find('[data-test-id="chat"]')
    ).toHaveLength(1);

    expect(
      wrapper.find('[data-test-id="chat"]').text()
    ).toBe('This is the first message');
  });

  it(`should add multiple chats on enter`, () => {
    type('This is the first message');
    type('This is the second message');

    expect(
      wrapper.find('[data-test-id="chat"]')
    ).toHaveLength(2);

    expect(
      wrapper.find('[data-test-id="chat"]').at(0).text()
    ).toBe('This is the second message');

    expect(
      wrapper.find('[data-test-id="chat"]').at(1).text()
    ).toBe('This is the first message');
  });
});
