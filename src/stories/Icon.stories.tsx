import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComp, Text } from '../components'

const ICONS = ['arrow-left', 'arrow-right', 'arrow_up', 'arrow_down', 'attach', 'close']

export default {
  title: 'Icon',
  component: IconComp,
  argTypes: {
    type: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'selected',
        'brand',
        'danger',
        'warning',
        'success',
        'information',
        'discovery'
      ],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {ICONS.map((iconName) => (
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}
        key={iconName}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px'
          }}
        >
          <IconComp name={iconName} size={`${args.size}`} type={`${args.type}`} />
        </div>
        <Text size="small">{iconName}</Text>
      </div>
    ))}
  </div>
)

export const Icon = Template.bind({})
Icon.args = {
  type: '',
  size: 'xsmall'
}
