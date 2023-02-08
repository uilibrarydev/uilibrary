import React from 'react'

import { TSnackbarProps } from './types'
import '../../assets/styles/components/_snackbar.scss'
import Text from '../Text'
import Icon from '../Icon'
import Button from '../Button'

export const Snackbar = (props: TSnackbarProps): JSX.Element | null => {
  const { text, iconProps, className = '', withAction } = props

  return (
    <div className={`snackbar ${className}`}>
      {iconProps?.name ? <Icon {...iconProps} className="mr-16" size="medium" /> : null}
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
