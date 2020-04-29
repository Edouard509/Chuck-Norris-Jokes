import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.js';

storiesOf('Button', module)
  .add('Primary', () => <Button label="Next Joke" type="primary" />)
