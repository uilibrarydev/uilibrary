import React from 'react'
import { Text, Container as _Container, Button } from '../index'
import { noop } from '../utils/helpers'

export default {
  title: 'Container',
  component: _Container
}
const Template = (): JSX.Element => {
  const helperStyles = {
    marginTop: '10px'
  }

  return (
    <div>
      <_Container>
        <div>
          <Text size="small" />
          <div style={helperStyles}>
            <Button buttonText="Next" onClick={noop} type="primary" />
          </div>
        </div>
      </_Container>
    </div>
  )
}

export const Container = Template.bind({})
