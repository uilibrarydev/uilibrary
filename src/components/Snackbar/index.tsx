import React from 'react'

import { TSnackbarProps } from './types'
import '../../assets/styles/components/_snackbar.scss'
import Text from '../Text'
import Icon from '../Icon'
import Button from '../Button'
import { TIconTypes } from '../Icon/types'

const TYPE_MAPPING: { [key: string]: TIconTypes } = {
  warning: 'warning',
  success: 'success',
  error: 'danger',
  information: 'information'
}

const ICONS_MAPPING = {
  warning: 'warning-hover',
  success: 'checkmark-hover',
  error: 'error',
  information: 'info-hover'
}
export const Snackbar = (props: TSnackbarProps): JSX.Element | null => {
  const { text, iconProps, className = '', withAction, type = 'information' } = props
  console.log(ICONS_MAPPING[type])
  return (
    <div className={`snackbar ${className}`}>
      {iconProps?.name ? (
        <Icon
          {...iconProps}
          name={ICONS_MAPPING[type]}
          type={TYPE_MAPPING[type]}
          className="mr-16"
          size="medium"
        />
      ) : null}
      <Text
        className="snackbar__text"
        type="primary"
        size="standard"
        weight="regular"
        lineHeight="medium"
      >
        {text}
      </Text>
      {withAction ? (
        <Button className="ml-16" size="small" type="tertiary" buttonText="Action" />
      ) : null}
    </div>
  )
}

export default Snackbar
