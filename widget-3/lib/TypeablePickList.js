import React, { Component } from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const selectedClass = {
  backgroundColor: 'lightblue',
  color: 'white',
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
      selected: props.selected
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
    }
  }

  selectItem(selected){
    const { onSelect } = this.props;

    this.setState(
      { selected },
      () => onSelect(selected)
    );
  }

  render(){
    const { items } = this.props;
    const { selected } = this.state;

    return (<div>
      <input type="text"
        ref={input => this.input = input}
        onKeyPress={this.keyPress.bind(this)}/>
      <ul>
        {
          items.map(item => <li
            key={`item-${item}`}
            onClick={() => this.selectItem(item)}
            className={isSelected(item, selected) && css(selectedClass)}>
            {item}
          </li>)
        }
      </ul>
    </div>);
  }
}

export default TypeablePickList;
