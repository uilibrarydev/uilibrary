import React from 'react'
import { Tooltip as _Tooltip } from '../index'
import { StoryFn } from '@storybook/react'
import { TTooltipProps } from '../components/Tooltip/types'

export default {
  title: 'Tooltip',
  component: _Tooltip,
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

const Template: StoryFn<TTooltipProps> = (args) => {
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
      <_Tooltip
        {...args}
        id="ooooo"
        timer={1000}
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
