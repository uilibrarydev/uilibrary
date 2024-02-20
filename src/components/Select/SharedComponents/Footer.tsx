import React from 'react'
import { Button } from '../../Button'
import { TSelectFooterPropTypes } from '../types'

export const Footer = (props: TSelectFooterPropTypes): JSX.Element => {
  const { buttonProps, onApply, onCancel, hasChange = true } = props
  return (
    <div className="select__footer">
      <Button
        {...(buttonProps.cancel || {})}
        type="tertiary"
        size="medium"
        className="mr-12"
        onClick={onCancel}
      />
      <Button
        disabled={!hasChange}
        {...buttonProps.confirm}
        type="primary"
        size="medium"
        onClick={onApply}
      />
    </div>
  )
}
