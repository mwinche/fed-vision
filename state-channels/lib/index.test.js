import foo, { createStore } from './index.js';

describe(`the store`, () => {
  it(`should be 'foo'`, () => {
    expect(foo).toBe('foo');
  });

  it('should have a factory function', () => {
    expect(typeof createStore).toBe('function');
    expect(createStore()).toBe('foo');
  });
});
