import React from 'react'
import { Popover as _Popover } from '../index'
import { StoryFn } from '@storybook/react'
import { TPopoverProps } from '../components/Popover/types'

export default {
  title: 'Popover',
  component: _Popover,
  argTypes: {
    position: {
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'middle-left',
        'middle-right'
      ],
      control: { type: 'radio' }
    }
  }
}

const Template: StoryFn<TPopoverProps> = (args) => {
  return (
    <>
      <_Popover {...args} id="popover_test" />
      <div
        style={{
          position: 'absolute',
          left: 300,
          top: 300,
          width: 100,
          height: 500,
          background: 'red'
        }}
      >
        <div id="popover_test"> Click on me</div>
      </div>
    </>
  )
}

export const Popover = Template.bind({})

Popover.args = {
  linkAddons: {
    url: 'dasdsa',
    beforeLink:
      'Lorem ipsum dolor sit amet.A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.EstLorem ipsum dolor sit amet'
  },
  text: 'saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem.'
}
