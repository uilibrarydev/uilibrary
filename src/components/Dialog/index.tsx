import React from 'react'
import Popup from '../Popup'
import Button from '../Button'
import { TDialogPropTypes } from './types'

import './index.scss'
const Dialog = (props: TDialogPropTypes): JSX.Element | null => {
  const { isOpen, onClose, onSumbit, title, contentTitle, contentText } = props

  const handleSubmit = () => {
    onSumbit()
    onClose()
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
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
            buttonText="Cancel"
            onClick={onClose}
          />
          <Button type="primary" buttonText="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </Popup>
  )
}

export default Dialog
