import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './index'

storiesOf('Input', module)
  .add('Default', () => (
    <Input />
  ))
  .add('Text', () => (
    <Input type="text" />
  ))
  .add('Disabled', () => (
    <Input
      disabled
      placeholder="disabled"
    />
  ))
  .add('Number', () => (
    <Input type="number" />
  ))
  .add('Password', () => (
    <Input
      type="password"
      onFocus={action('focused')}
      onClick={action('clicked')}
      onBlur={action('blured')}
      onChange={action('changed')}
      onKeyDown={action('key down')}
      onKeyUp={action('key up')}
    />
  ))
  .add('File', () => (
    <Input
      type="File"
      onFocus={action('focused')}
      onClick={action('clicked')}
      onBlur={action('blured')}
      onChange={action('changed')}
      onKeyDown={action('key down')}
      onKeyUp={action('key up')}
    />
  ))
  .add('With placeholder', () => (
    <Input
      type="text"
      placeholder="Type text to see the magic"
    />
  ))
