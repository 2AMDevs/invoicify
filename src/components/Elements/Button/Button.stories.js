import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './index'

storiesOf('Button', module)
  .add('With text w/o event handlers', () => (
    <Button onClick={action('clicked')}>Click action</Button>
  ))
  .add('Primary', () => (
    <Button
      primary
      onFocus={action('focused')}
      onClick={action('clicked')}
      onBlur={action('blured')}
    >
      Primary
    </Button>
  ))
  .add('Secondary', () => (
    <Button
      secondary
      onFocus={action('focused')}
      onClick={action('clicked')}
      onBlur={action('blured')}
    >
      Secondary
    </Button>
  ))
  .add('with event handlers', () => (
    <Button
      onFocus={action('focused')}
      onClick={action('clicked')}
      onBlur={action('blured')}
    >
      Focus Click and Blur
    </Button>
  ))
