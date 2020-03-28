import React from 'react'
import { Text } from './index'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Atoms|Text', module)

stories
    .add('Default', () => <Text>Hello Button</Text>)
    .add('Second', () => <Text>Hello Button</Text>)
