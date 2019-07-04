import React from 'react';
import { storiesOf } from '@storybook/react';

import { Core } from '@babou/core';

storiesOf('Components', module).add('Core', () => <Core/>);

/*storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));*/
