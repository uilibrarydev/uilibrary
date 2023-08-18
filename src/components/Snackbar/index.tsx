import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Text, Icon, Button } from '../index'

import '../../assets/styles/components/_snackbar.scss'
import { TSnackbarProps, TToastProps } from './types'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'

export const useGetSnackbar = (
  props: TSnackbarProps
): {
  Comp: () => JSX.Element
  _toast: (toastProps: TToastProps) => void
} => {
  const { duration = 6000, position = 'bottom-center' } = props

  const CustomToast = ({ actionProps, toastId, type = 'information', text }: TToastProps) => {
    return (
      <div className="snackbar">
        <Icon
          name={ICONS_MAPPING[type]}
          type={TYPE_MAPPING[type]}
          className="mr-16"
          size="medium"
        />

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
              toast.dismiss(toastId)
              actionProps?.onClick?.(e)
            }}
          />
        ) : null}
      </div>
    )
  }

  const _toast = (toastProps: TToastProps) => {
    const { toastId, closeSnackbar } = toastProps
    toast(() => CustomToast(toastProps), {
      onClose: () => closeSnackbar?.(toastId),
      bodyClassName: '__body',
      className: '_container',
      toastId
    })
  }

  const Comp = () => (
    <ToastContainer
      theme="light"
      hideProgressBar
      transition={Slide}
      position={position}
      autoClose={duration}
      closeButton={() => null}
    />
  )

  return { Comp, _toast }
}
