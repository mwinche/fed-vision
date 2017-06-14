import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import TypeablePickList from './TypeablePickList.js';

const uniqueAdd = (list, item) => list.indexOf(item) < 0 ? list.concat(item) : list;

class StateWrapper extends Component {
  constructor(props){
    super(props);

    const { selected, items } = props;
    this.state = { selected, items };
  }

  newItem(item){
    const transformedItem = item.trim().replace(/\s+/g, '-');

    this.setState(({ items }) => {
      return {
        selected: item,
        items: uniqueAdd(items, transformedItem)
      };
    });
  }

  render(){
    const { items, selected } = this.state;

    return <TypeablePickList
      items={items}
      selected={selected}
      onNewItem={this.newItem.bind(this)} />;
  }
}

storiesOf('TypeablePickList', module)
  .add('default', () => {
    return <StateWrapper items={['one', 'two']} selected="one" />;
  });
