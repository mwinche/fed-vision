import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';

const selectedClass = {
  backgroundColor: 'lightblue',
  color: 'white',
};

const isSelected = (item, selected) => selected === item;

const TypeablePickList = ({items, onNewItem, onSelect, selected}) => {
  let input;
  
  return (<div>
    <input type="text"
      ref={_input => input = _input}
      onKeyPress={({key}) => {
        if(key === 'Enter'){
          onNewItem(input.value);
          input.value = '';
        }
      }}/>
    <ul>
      {
        items.map(item => <li
          key={`item-${item}`}
          onClick={() => onSelect(item)}
          className={isSelected(item, selected) && css(selectedClass)}>
          {item}
        </li>)
      }
    </ul>
  </div>);
};

TypeablePickList.defaultProps = {
  items: [],
  onNewItem: () => {},
  onSelect: () => {},
};

TypeablePickList.propTypes = {
  items: PropTypes.array,
  onNewItem: PropTypes.func,
  onSelect: PropTypes.func,
};

export default TypeablePickList;
