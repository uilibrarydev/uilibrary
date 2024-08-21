import React, { PropsWithChildren } from 'react'
import { type StoryFn } from '@storybook/react';

import { Button as _Button, IconChevronDown } from '../index'
import { TButtonPropTypes } from '../components/Button/types'
import { CodeBlock } from '../helperComponents'

export default {
  title: 'Button',
  component: _Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'text', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    disabled: {
      options: ['true', 'false'],
      control: { disabled: 'true' }
    },
    isLoading: {
      options: ['true', 'false'],
      control: { isLoading: 'false' }
    }
  }
}

const designSpecs = `
<Button size="large" buttonText="Label" />
<Button type="tertiary" size="large" buttonText="Label" />
<Button size="large" buttonText="Label" isLoading />
<Button type="text" size="large" buttonText="Label" iconProps={{ Component: IconChevronDown }} />
<Button type="link" size="large">Label</Button>
<Button type="secondary" size="large">{() => "Label"}</Button>
`;

const Template: StoryFn<PropsWithChildren<TButtonPropTypes>> = (args) => (
  <div>
    <_Button {...args} />
    <br/>
    <br/>
    <br/>
    <div style={{display: 'flex', gap: '20px'}}>
      <_Button size="large" buttonText="Label" />
      <_Button type="tertiary" size="large" buttonText="Label" />
      <_Button  size="large" buttonText="Label" isLoading />
      <_Button type="text" size="large" buttonText="Label" iconProps={{ Component: IconChevronDown }} />
      <_Button type="link" size="large">Label</_Button>
      <_Button type="secondary" size="large">{() => "Label"}</_Button>
    </div>
    <br/>
    <br/>
    <CodeBlock title="Design Specs Example">{designSpecs}</CodeBlock>
  </div>
)

export const Button = Template.bind({})
Button.args = {
  iconProps: {
    Component: IconChevronDown
  },
  autoFocus: true,
  type: 'tertiary',
  size: 'large',
  disabled: false,
  isLoading: false,
  buttonText: 'Label',
  onClick: () => console.log('button clicked')
}
