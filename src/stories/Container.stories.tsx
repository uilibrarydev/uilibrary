import React from 'react'
import { Container as ContainerComp } from '../components'
import Input from '../components/Input/index'
import { Button } from '../components'
import { noop } from '../utils/index'

export default {
  title: 'Container',
  component: ContainerComp
}
const Template = (): JSX.Element => {
  const helperStyles = {
    marginTop: '10px'
  }

  return (
    <div>
      <ContainerComp>
        <div>
          <Input />
          <text />
          <div style={helperStyles}>
            <Button buttonText="Next" onClick={noop} type="primary" />
          </div>
        </div>
      </ContainerComp>
    </div>
  )
}

export const Container = Template.bind({})
