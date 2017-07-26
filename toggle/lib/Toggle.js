import React, { Component } from 'react';
import { css, merge } from 'glamor';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
  static defaultProps = {
    on: false,
    disabled: false,
    onChange: () => {},
  };

  static propTypes = {
    disabled: PropTypes.bool,
    on: PropTypes.bool,
    onChange: PropTypes.func,
  };

  render() {
    const { on } = this.state;
    const {
      disabled,
      activeColor,
      inactiveColor,
      handleColor,
    } = this.props;

    return (<button
      className={css(toggle, disabled && toggleDisabled)}
      onClick={() => this.toggle()}
      data-test-id="toggle-wrapper"
    >
      <div
        className={css(wrapper,
        !on && off,
        disabled && wrapperDisabled)}
      >
        <span {...mergeBG(left, activeColor)} />
        <span {...mergeBG(button, handleColor)} />
        <span {...mergeBG(right, inactiveColor)} />
      </div>
    </button>);
  }

  constructor(props) {
    super(props);

    const { on } = props;

    this.state = {
      on: on || false,
    };
  }

  toggle() {
    const { disabled, onChange } = this.props;

    if (!disabled) {
      this.setState(
        ({ on }) => ({ on: !on }),
        onChange,
      );
    }
  }
}

const mergeBG = (styles, backgroundColor) =>
  backgroundColor ?
    merge(styles, { backgroundColor }) :
    styles;

const toggle = {
  boxSizing: 'border-box',
  overflow: 'hidden',
  border: '1px solid gray',
  display: 'inline-block',
  height: 50,
  width: 125,
  cursor: 'pointer',
  padding: 0,
};

const toggleDisabled = {
  background: 'white',
  cursor: 'default',
};

const wrapper = {
  transition: 'transform 200ms, opacity 200ms',
  display: 'inline-block',
  height: 50,
  width: 200,
};

const wrapperDisabled = {
  opacity: 0.25,
};

const off = css({
  transform: 'translateX(-76px)',
});

const block = {
  width: 75,
  height: 50,
  display: 'inline-block',
};

const left = css({
  background: 'lightgreen',
  ...block,
});

const right = css({
  background: 'pink',
  ...block,
});

const button = css({
  background: 'lightgray',
  boxSizing: 'border-box',
  borderRight: '1px solid gray',
  borderLeft: '1px solid gray',
  width: 50,
  height: 50,
  display: 'inline-block',
});

Toggle.propTypes = {
  disabled: PropTypes.bool,
  on: PropTypes.bool,
  onChange: PropTypes.func,
};
