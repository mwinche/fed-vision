import React, { Component } from 'react';
import { css } from 'glamor';

export class Toggle extends Component {
  render(){
    const { on } = this.state;
    const { disabled } = this.props;

    return <div
        className={css(toggle, disabled && toggleDisabled)}
        onClick={() => this.toggle()
      }>
      <div className={css(wrapper,
          !on && off,
          disabled && wrapperDisabled)
        }>
        <span {...left}></span>
        <span {...button}></span>
        <span {...right}></span>
      </div>
    </div>;
  }

  constructor(props){
    super(props);

    const { on, disabled } = props;

    this.state = {
      on: on || false
    };
  }

  toggle(){
    const { disabled } = this.props;

    if(!disabled){
      this.setState(
        ({ on }) => ({ on: !on })
      );
    }
  }
}

const toggle = {
  boxSizing: 'border-box',
  overflow: 'hidden',
  border: '1px solid gray',
  display: 'inline-block',
  height: 50,
  width: 125,
  cursor: 'pointer',
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
