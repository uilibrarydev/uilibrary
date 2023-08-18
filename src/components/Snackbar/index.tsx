import React, { useEffect } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Text, Icon, Button } from '../index'

import '../../assets/styles/components/_snackbar.scss'
import { TSnackbarProps } from './types'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'

export const Snackbar = (props: TSnackbarProps): JSX.Element | null => {
  const {
    text,
    actionProps,
    closeSnackbar,
    duration = 6000,
    type = 'information',
    position = 'bottom-center'
  } = props

  const CustomToastWithLink = () => (
    <div className="snackbar">
      <Icon name={ICONS_MAPPING[type]} type={TYPE_MAPPING[type]} className="mr-16" size="medium" />

      <Text
        className="snackbar__text"
        type="primary"
        size="standard"
        weight="regular"
        lineHeight="medium"
      >
        {text}
      </Text>
      {actionProps ? (
        <Button
          size="small"
          type="tertiary"
          {...actionProps}
          className="ml-16"
          onClick={(e) => {
            toast.dismiss()
            actionProps?.onClick?.(e)
          }}
        />
      ) : null}
    </div>
  )

  useEffect(() => {
    toast(CustomToastWithLink, {
      onClose: closeSnackbar,
      bodyClassName: '__body',
      className: '_container'
    })
  }, [])

  return (
    <ToastContainer
      position={position}
      autoClose={duration}
      hideProgressBar
      closeButton={() => null}
      transition={Slide}
      theme="light"
      className="snackbar"
    />
  )
}

export default Snackbar
