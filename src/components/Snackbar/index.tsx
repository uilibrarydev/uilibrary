import React, { useEffect } from 'react'
import toast, { Toaster, ToastBar } from 'react-hot-toast'

import { Text, Icon, Button } from '../index'

import '../../assets/styles/components/_snackbar.scss'
import { TSnackbarProps } from './types'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'

export const Snackbar = (props: TSnackbarProps): JSX.Element | null => {
  const {
    text,
    isVisible,
    actionProps,
    closeSnackbar,
    duration = 6000,
    type = 'information',
    position = 'bottom-center'
  } = props

  useEffect(() => {
    if (isVisible) {
      toast(text, { duration: actionProps ? Infinity : duration, position })
      closeSnackbar()
    }
  }, [isVisible])

  return (
    <Toaster>
      {(t) => {
        return (
          <ToastBar toast={t} style={{ borderRadius: 2, padding: '16px 24px' }}>
            {() => {
              return (
                <>
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
                        toast.dismiss()
                        actionProps?.onClick?.(e)
                      }}
                    />
                  ) : null}
                </>
              )
            }}
          </ToastBar>
        )
      }}
    </Toaster>
  )
}

export default Snackbar
