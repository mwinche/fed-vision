import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';

import ChannelStore, { addChannel, sendMessage } from 'state-channels';

import Channel from './Channel.js';

ChannelStore.dispatch(addChannel('fed'));
ChannelStore.dispatch(addChannel('bed'));
ChannelStore.dispatch(addChannel('qa'));

const container = {
  display: 'flex',
  position: 'absolute',
  top: 0, bottom: 0, left: 0, right: 0,
};

class App extends Component {
  constructor(props){
    super(props);

    const channels = ChannelStore.getState();

    this.state = {
      leftChannel: Object.keys(channels)[0],
      rightChannel: Object.keys(channels)[0]
    };
  }

  render(){
    const {
      onNewChannel, onNewMessage, channels
    } = this.props;

    const { leftChannel, rightChannel } = this.state;

    return <div className={css(container)}>
        <Channel
          channel={leftChannel}
          channels={channels}
          onNewChannel={leftChannel => {
            ChannelStore.dispatch(addChannel(leftChannel));
            this.setState({ leftChannel });
          }}
          onSelectChannel={ leftChannel => this.setState({ leftChannel }) }
          onNewMessage={msg => onNewMessage(leftChannel, msg)}
          color="lightgreen" />
        <Channel
          channel={rightChannel}
          channels={channels}
          onNewChannel={rightChannel => {
            ChannelStore.dispatch(addChannel(rightChannel));
            this.setState({ rightChannel });
          }}
          onSelectChannel={ rightChannel => this.setState({ rightChannel }) }
          onNewMessage={msg => onNewMessage(rightChannel, msg)}
          color="lightblue" />
    </div>;
  }
}

const mapStateToProps = channels => ({ channels });
const mapDispatchToProps = dispatch => ({
  onNewChannel: channel => dispatch(addChannel(channel)),
  onNewMessage: (channel, message) => dispatch(sendMessage(channel, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
