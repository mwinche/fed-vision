import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderStatic } from 'glamor/server';

import App from '@mwinche/app-1';
import ChannelStore, { addChannel } from '@mwinche/state-channels';

const initialChannels = ['fed', 'bed'];

initialChannels
  .forEach(channel => ChannelStore.dispatch(addChannel(channel)));

export default (jsfiles) => () => {
  const element = React.createElement(App, { store: ChannelStore });

  const { html, css, ids } = renderStatic(() => ReactDOMServer.renderToString(element));

  return `<html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window._glam = ${JSON.stringify(ids)};</script>
      ${jsfiles.map(file => `<script src="${file}"></script>`).join('')}
    </body>
  </html>`;
};
