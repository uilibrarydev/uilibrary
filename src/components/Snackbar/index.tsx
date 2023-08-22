import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import type { ToastItem } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Text, Icon, Button } from '../index'

import '../../assets/styles/components/_snackbar.scss'
import { TSnackbarProps, TToastProps } from './types'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'
const DEFAULT_DURAION = 6000
const CustomToast = ({ actionProps, toastId, type = 'information', text }: TToastProps) => {
  return (
    <div className="snackbar" key={toastId}>
      <div className="snackbar__content">
        <Icon name={ICONS_MAPPING[type]} type={TYPE_MAPPING[type]} size="medium" />
        <Text
          className="snackbar__text pl-16 pr-8"
          type="primary"
          size="standard"
          weight="regular"
          lineHeight="large"
        >
          {text}
        </Text>
      </div>

      {actionProps ? (
        <Button
          size="small"
          type="tertiary"
          {...actionProps}
          onClick={(e) => {
            toast.dismiss(toastId)
            actionProps?.onClick?.(e)
          }}
        />
      ) : null}
    </div>
  )
}

const notify = (toastProps: TToastProps): void => {
  const { toastId, closeSnackbar, actionProps, duration = DEFAULT_DURAION } = toastProps
  toast(() => CustomToast(toastProps), {
    bodyClassName: '__body',
    className: '_container',
    toastId,
    autoClose: actionProps ? false : duration
  })
  toast.onChange((payload: ToastItem) => {
    if (payload.status === 'removed') {
      closeSnackbar?.(payload.id)
    }
  })
}

const Snackbar = (props: TSnackbarProps): JSX.Element => {
  const { duration = 1000, position = 'bottom-center' } = props

  return (
    <ToastContainer
      theme="light"
      hideProgressBar
      transition={Slide}
      position={position}
      autoClose={duration}
      closeButton={() => null}
    />
  )
}

export { Snackbar, notify }
