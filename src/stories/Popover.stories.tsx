import React from 'react'
import { Popover } from '../components/Popover'

export default {
  title: 'Popover',
  component: Popover,
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

const Template = (args: any) => {
  return (
    <>
      <Popover {...args} id="popover_test" />
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

export const PopoverPlayground = Template.bind({})

PopoverPlayground.args = {
  linkAddons: {
    url: 'dasdsa',
    beforeLink:
      'Lorem ipsum dolor sit amet.A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.EstLorem ipsum dolor sit amet'
  },
  text: 'saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem qui nemo enim id velit voluptas.Est saepe dolorem.'
}
