import React from 'react';

import App from '.';

describe('App', () => {
  it('renders correctly', () => {
    const props = {
      assets: {
        main: {
          css: '/main.css',
          js: '/main.js'
        }
      },
      content: '<h1>Hello React</h1>',
      initialState: {app: {firstState: 'yes'}}
    };
    const {output} = shallow(<App {...props} />);

    expect(output).toEqualJSX(
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <title>Hello React</title>
          <link href={props.assets.main.css} rel='stylesheet' />
        </head>
        <body>
          <div dangerouslySetInnerHTML={{__html: props.content}} id='root' />
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}`}} />
          <script src={props.assets.main.js} />
        </body>
      </html>
    );
  });
});
