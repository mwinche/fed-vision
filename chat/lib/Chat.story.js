import React, { Component } from 'react';
import { storiesOf, action } from '@storybook/react';
import Chat from './Chat.js';

class ChatWithState extends Component {
  constructor(props){
    super(props);

    this.state = {
      chats: props.chats.slice(0)
    };
  }

  render(){
    const { chats } = this.state;

    return <Chat
      onNewMessage={ msg => this.setState({ chats: chats.concat(msg) }) }
      chats={chats} />;
  }
}

storiesOf('Chat', module)
  .add('default', () => <ChatWithState chats={[]} />)
  .add('some chats', () => <ChatWithState chats={[
    'One', 'Two', 'Three'
  ]} />);
