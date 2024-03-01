import React from 'react'
import { Button } from '../../Button'
import { TSelectFooterPropTypes } from '../types'
import { Checkbox } from '../../Checkbox'

export const Footer = (props: TSelectFooterPropTypes): JSX.Element => {
  const { buttonProps, onApply, onCancel, hasChange = true, checkboxInfo } = props
  const [isSelected, setIsSelected] = React.useState(checkboxInfo?.isChecked || false)

  return (
    <div className="select__footer">
      <div>
        {checkboxInfo ? (
          <Checkbox label={checkboxInfo.label} selectedValue={isSelected} onClick={setIsSelected} />
        ) : null}
      </div>
      <div>
        <Button
          {...(buttonProps.cancel || {})}
          type="tertiary"
          size="medium"
          className="mr-12"
          onClick={onCancel}
        />
        <Button
          disabled={!hasChange && isSelected === !!checkboxInfo?.isChecked}
          {...buttonProps.confirm}
          type="primary"
          size="medium"
          onClick={() => onApply(isSelected)}
        />
      </div>
    </div>
  )
}
