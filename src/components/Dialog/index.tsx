import React from 'react'
import Modal from '../Modal'
import Button from '../Button'
import { TDialogPropTypes } from './types'

import './index.scss'
const Dialog = (props: TDialogPropTypes): JSX.Element | null => {
  const {
    isOpen,
    onClose,
    onSumbit,
    title,
    contentTitle,
    contentText,
    buttonProps = {
      confirmButtonText: 'Հաստատել',
      cancelButtonText: 'չեղարկել'
    }
  } = props

  const handleSubmit = () => {
    onSumbit()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="dialog">
        <div className="dialog_title">{title}</div>
        <div className="dialog_content">
          <span className="dialog_content_title">{contentTitle}</span>
          <span className="dialog_content_text"> {contentText}</span>
        </div>
        <div className="dialog_footer">
          <Button
            className="dialog_cancel_button"
            type="secondary"
            buttonText={buttonProps.cancelButtonText}
            onClick={onClose}
          />
          <Button
            type="primary"
            buttonText={buttonProps.confirmButtonText}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Modal>
  )
}

export default Dialog
