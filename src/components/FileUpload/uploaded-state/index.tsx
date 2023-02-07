import React from 'react'
import Icon from '../../Icon'
import Text from '../../Text'
import { TUploadedStatePropTypes } from './types'
import './index.scss'

const FILE_ICON_NAME: Record<string, string> = {
  png: 'file_png',
  jpeg: 'file_jpeg',
  pdf: 'file_pdf'
}

const UploadedState = (props: TUploadedStatePropTypes): JSX.Element => {
  const { name, onRemove, fileType } = props
  const iconName = FILE_ICON_NAME[fileType] || FILE_ICON_NAME.png

  return (
    <div className="uploaded_state">
      <Icon name={iconName} className="file_icon" />
      <Text size="xSmall">{name || ''}</Text>
      <Icon name="close" className="icon_remove" onClick={onRemove} />
    </div>
  )
}

export default UploadedState
