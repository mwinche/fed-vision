import React from 'react';
import { mount } from 'enzyme';
import Toggle from './Toggle.js';

describe(`<Toggle />`, () => {
  it(`be notified via onChange`, () => {
    const obj = {
      called: false,
      callback(){ this.called = true; }
    };

    const wrapper = mount(<Toggle onChange={obj.callback.bind(obj)} />);

    wrapper
      .find('[data-test-id="toggle-wrapper"]')
      .simulate('click');

    expect(obj.called).toBe(true);
  });
});
