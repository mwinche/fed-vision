import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'glamor';

import { addChannel, sendMessage } from '@mwinche/state-channels';

import Channel from './Channel.js';

const container = {
  display: 'flex',
  position: 'absolute',
  top: 0, bottom: 0, left: 0, right: 0,
};

class App extends Component {
  constructor(props){
    super(props);

    const { store } = props;

    const channels = store.getState();

    this.state = {
      leftChannel: Object.keys(channels)[0],
      rightChannel: Object.keys(channels)[0]
    };
  }

  render(){
    const {
      onNewChannel, onNewMessage, channels, store
    } = this.props;

    const { leftChannel, rightChannel } = this.state;

    return <div className={css(container)}>
        <Channel
          channel={leftChannel}
          channels={channels}
          onNewChannel={leftChannel => {
            onNewChannel(leftChannel);
            this.setState({ leftChannel });
          }}
          onSelectChannel={ leftChannel => this.setState({ leftChannel }) }
          onNewMessage={msg => onNewMessage(leftChannel, msg)}
          color="lightgreen" />
        <Channel
          channel={rightChannel}
          channels={channels}
          onNewChannel={rightChannel => {
            onNewChannel(rightChannel);
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
