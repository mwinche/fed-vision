import React, { Component } from 'react';

import PickList from 'widget-3';
import Chat from 'widget-2';
import ChannelStore, { addChannel, sendMessage } from 'state-channels';

export default class extends Component {
  constructor(props){
    super(props);

    ChannelStore.dispatch(addChannel('fed'));
    ChannelStore.dispatch(addChannel('bed'));
    ChannelStore.dispatch(addChannel('qa'));

    ChannelStore.subscribe(() => {
      this.setState({ channels: ChannelStore.getState() });
    });

    const channels = ChannelStore.getState();

    this.state = {
      channels: channels,
      activeChannel: Object.keys(channels)[0]
    };
  }

  render(){
    const { channels, activeChannel } = this.state;

    return <div>
      <Chat
        chats={channels[activeChannel]}
        onNewMessage={message => ChannelStore.dispatch(sendMessage(activeChannel, message))} />
      <PickList
        items={Object.keys(channels)}
        selected={activeChannel}
        onNewItem={channel => {
          ChannelStore.dispatch(addChannel(channel));
          this.setState({ activeChannel: channel });
        }}
        onSelect={activeChannel => this.setState({ activeChannel })} />
    </div>;
  }
};
