import React from 'react'
import Button from '../../Button'
import { TSelectFooterPropTypes } from '../types'

const Footer = (props: TSelectFooterPropTypes): JSX.Element => {
  const { buttonProps, onApply, onCancel } = props
  return (
    <div>
      <div>
        <Button
          {...(buttonProps.cancel || {})}
          type="tertiary"
          size="medium"
          className="mr-12"
          onClick={onCancel}
        />
        <Button {...buttonProps.confirm} type="primary" size="medium" onClick={onApply} />
      </div>
    </div>
  )
}

export default Footer
