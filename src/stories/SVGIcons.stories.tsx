import React from 'react'
import {
  IconChevronUp,
  IconCopy,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconArrowExit,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconCheckmark
} from '../components/SVGIcons'
import { Text } from '../components/Text'

export default {
  title: 'SVG Icons',
  component: null,
  argTypes: {
    size: {
      options: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'xxsmall'],
      control: { type: 'select' }
    },
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
      control: { type: 'select' }
    }
  }
}

const icons = [
  IconArrowExit,
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconCheckmark,
  IconChevronUp,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconCopy
]

const Template = (args: any) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {icons.map((Component, index) => (
        <div
          key={index}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}
        >
          <Component {...args} />
          <Text className="mt-8">
            {Component.name
              .replace(/^Icon([A-Z])/g, '$1')
              .replace(/([a-z])([A-Z])/g, '$1-$2')
              .toLowerCase()}
          </Text>
        </div>
      ))}
    </div>
  )
}

export const SVGIcons = Template.bind({})

SVGIcons.args = {
  size: 'medium',
  type: 'primary'
}
