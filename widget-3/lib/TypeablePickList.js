import React, { Component } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

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
};

const openList = {
  opacity: 1,
  transform: 'translate(-5px, 4px)',
};

const openContainer = {
  '::after': {
    transform: 'rotate(180deg)',
  },
};

const container = {
  border: `1px solid darkblue`,
  cursor: 'pointer',
  width: 200,
  padding: 4,
  boxSizing: 'border-box',
  position: 'relative',
  fontFamily: 'monospace',
  '::after': {
    content: `'▾'`,
    position: 'absolute',
    right: 4,
    top: 4,
    transition: 'transform 200ms',
  },
};

const listItem = {
  padding: 4,
};

const inputClass = {
  width: '100%',
  boxSizing: 'border-box',
};

const isSelected = (item, selected) => selected === item;

class TypeablePickList extends Component {
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
      { selected },
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

  render(){
    const { items } = this.props;
    const { selected, open } = this.state;

    return (<div
      className={css(container, open && openContainer)}
      onClick={this.toggleOpen.bind(this)}>

      <span>#{selected}</span>
      <ul className={css(itemList, open && openList)}>
        {
          items.map(item => <li
            key={`item-${item}`}
            onClick={() => this.selectItem(item)}
            className={css(
              listItem,
              isSelected(item, selected) && selectedClass
            )}>
            {item}
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
}

export default TypeablePickList;
