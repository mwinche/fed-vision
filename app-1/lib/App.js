import React, { Component } from 'react';
import { css } from 'glamor';

import ChannelStore, { addChannel, sendMessage } from 'state-channels';

import Channel from './Channel.js';

const container = {
  display: 'flex',
  position: 'absolute',
  top: 0, bottom: 0, left: 0, right: 0,
};

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
      channels,
      leftChannel: Object.keys(channels)[0],
      rightChannel: Object.keys(channels)[0]
    };
  }

  onNewMessage(channel, message){
    ChannelStore.dispatch(sendMessage(channel, message));
  }

  render(){
    const { channels, leftChannel, rightChannel } = this.state;

    return <div className={css(container)}>
        <Channel
          channel={leftChannel}
          channels={channels}
          onNewChannel={leftChannel => {
            ChannelStore.dispatch(addChannel(leftChannel));
            this.setState({ leftChannel });
          }}
          onSelectChannel={ leftChannel => this.setState({ leftChannel }) }
          onNewMessage={ message => this.onNewMessage(leftChannel, message) }
          color="lightgreen" />
        <Channel
          channel={rightChannel}
          channels={channels}
          onNewChannel={rightChannel => {
            ChannelStore.dispatch(addChannel(rightChannel));
            this.setState({ rightChannel });
          }}
          onSelectChannel={ rightChannel => this.setState({ rightChannel }) }
          onNewMessage={ message => this.onNewMessage(rightChannel, message) }
          color="lightblue" />
    </div>;
  }
};
