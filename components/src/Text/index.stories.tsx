import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Text, TextProps } from '.'

const meta: Meta = {
  component: Text,
  title: 'Text'
}

export default meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'Basic Component'
}
