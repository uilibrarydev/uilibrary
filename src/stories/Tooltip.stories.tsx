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
  // const [elemRef, setelemRef] = useState<HTMLElement | null>(null)
  return (
    <div
      style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        position: 'absolute',
        top: 200,
        left: 400
      }}
    >
      <TooltipComp
        {...args}
        id="ooooo"
        text="My tooltip text"
        // position="bottom-left"
      />
      <div id="ooooo">Hover on me</div>
    </div>
  )
}

export const Tooltip = Template.bind({})

Tooltip.args = {
  text: 'Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text Prompt text',
  // position: 'top-right',
  size: 'large'
}
