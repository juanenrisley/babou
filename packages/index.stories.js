import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Core } from '@babou/core';

storiesOf('Components', module).add('Core', () => <Core/>);
storiesOf('Button', module)
  .add('with text', () => <button onClick={action('clicked')}>Hello button</button>)
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));
