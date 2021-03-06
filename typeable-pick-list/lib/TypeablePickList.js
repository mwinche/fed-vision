import React, { Component } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

class TypeablePickList extends Component {
  render(){
    const { items } = this.props;
    const { selected, open } = this.state;

    return (<div
      className={css(container)}>

      <button
        className={css(button, toggle, open && openToggle)}
        onClick={this.toggleOpen.bind(this)}>
        #{selected}
      </button>

      <ul className={css(itemList, open && openList)}>
        {
          items.map(item => <li
            key={`item-${item}`}
            className={css(
              listItem,
              isSelected(item, selected) && selectedClass
            )}>
            <button
              className={css(button)}
              onClick={() => this.selectItem(item)}>
              {item}
            </button>
          </li>)
        }
        <li className={css(listItem)}>
          <input type="text"
            placeholder="New Channel"
            className={css(inputClass)}
            ref={input => this.input = input}
            onKeyPress={this.keyPress.bind(this)}/>
        </li>
      </ul>
    </div>);
  }

  static defaultProps = {
    items: [],
    onNewItem: () => {},
    onSelect: () => {},
  }

  static propTypes = {
    items: PropTypes.array,
    onNewItem: PropTypes.func,
    onSelect: PropTypes.func,
  }

  constructor(props){
    super(props);

    this.state = {
      selected: props.selected,
      open: false,
    };
  }

  componentWillReceiveProps(props){
    const { selected } = props;

    if(this.state.selected !== selected){
      this.setState({ selected });
    }
  }

  keyPress({key}){
    const { onNewItem } = this.props;

    if(key === 'Enter'){
      onNewItem(this.input.value);
      this.input.value = '';
      this.setState({ open: false });
    }
  }

  selectItem(selected){
    const { onSelect } = this.props;

    this.setState(
      { selected, open: false },
      () => onSelect(selected)
    );
  }

  toggleOpen({ target }){
    if(target !== this.input){
      this.setState(
        ({ open }) => ({ open: !open })
      );
    }
  }
}

const selectedClass = {
  backgroundColor: 'lightblue',
  color: 'white',
};

const itemList = {
  position: 'absolute',
  transition: 'transform 200ms, opacity 200ms',
  listStyle: 'none',
  opacity: 0,
  transform: 'translate(-5px, 25px)',
  border: `1px solid darkblue`,
  paddingLeft: 0,
  width: 200,
  boxSizing: 'border-box',
  margin: 0,
  backgroundColor: 'white',
};

const openList = {
  opacity: 1,
  transform: 'translate(-5px, 4px)',
};

const container = {
  border: `1px solid darkblue`,
  cursor: 'pointer',
  width: 200,
  padding: 4,
  boxSizing: 'border-box',
  position: 'relative',
};

const listItem = {
  padding: 4,
};

const inputClass = {
  width: '100%',
  boxSizing: 'border-box',
};

const button = {
  width: '100%',
  boxSizing: 'border-box',
  border: 'none',
  background: 'transparent',
  textAlign: 'left',
  fontFamily: 'monospace',
  cursor: 'pointer',
};

const toggle = {
  '::after': {
    content: '\\25BE',
    position: 'absolute',
    right: 8,
    top: 6,
    transition: 'transform 200ms',
  },
};

const openToggle = {
  '::after': {
    transform: 'rotate(180deg)',
  },
};

const isSelected = (item, selected) => selected === item;

export default TypeablePickList;
