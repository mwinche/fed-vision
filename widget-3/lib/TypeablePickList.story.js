import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import TypeablePickList from './TypeablePickList.js';

const uniqueAdd = (list, item) => list.indexOf(item) < 0 ? list.concat(item) : list;

class StateWrapper extends Component {
  constructor(props){
    super(props);

    this.state = { items: props.items, selected: props.selected };
  }

  render(){
    const { items, selected } = this.state;

    const newItem = (item => {
      const transformedItem = item.trim().replace(/\s+/g, '-');

      this.setState(({ items }) => {
        return {
          selected: transformedItem,
          items: uniqueAdd(items, transformedItem)
        };
      })
    }).bind(this);

    return <TypeablePickList
      items={items}
      selected={selected}
      onSelect={item => this.setState({ selected: item })}
      onNewItem={newItem} />;
  }
}

storiesOf('TypeablePickList', module)
  .add('default', () => {
    return <StateWrapper items={['one', 'two']} selected="one" />;
  })
  // .add('initially on', () => (
  //   <Toggle on />
  // ))
  // .add('disabled (off)', () => (
  //   <Toggle disabled />
  // ))
  // .add('disabled (on)', () => (
  //   <Toggle disabled on />
  // ))
  // .add('override active color', () => (
  //   <Toggle on activeColor="green" />
  // ))
  // .add('override inactive color', () => (
  //   <Toggle inactiveColor="red" />
  // ))
  // .add('override handle color', () => (
  //   <Toggle handleColor="gray" />
  // ));
