import React from 'react'
import { Tooltip as TooltipComp } from '../components'

export default {
  title: 'Tooltip',
  component: TooltipComp,
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
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => {
  return <TooltipComp {...args}>Hover on meeeeeee</TooltipComp>
}

export const Tooltip = Template.bind({})

Tooltip.args = {
  text: 'Prompt text Prompt text Prompt text Prompt text',
  // position: 'top-left',
  size: 'large'
}
