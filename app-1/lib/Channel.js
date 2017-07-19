import React from 'react';
import { css } from 'glamor';

import PickList from 'widget-3';
import Chat from 'chat';

const half = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default ({
  color, channel, channels,
  onNewChannel, onSelectChannel,
  onNewMessage,
}) => (<div className={css(half, { background: color })}>
    <PickList
      items={Object.keys(channels)}
      selected={channel}
      onNewItem={onNewChannel}
      onSelect={onSelectChannel} />
    <Chat
      chats={channels[channel]}
      onNewMessage={onNewMessage} />
</div>);
