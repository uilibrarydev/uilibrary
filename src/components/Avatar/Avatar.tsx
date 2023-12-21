import React, { ReactElement, useState } from 'react'
import { TAvatarProps } from './types'
import classNames from 'classnames'
import FileUpload from '../FileUpload'
import { FileUploadMode } from '../FileUpload/types'
import '../../assets/styles/components/_avatar.scss'

export const Avatar = ({
  id,
  color = 'default',
  size = 'medium',
  type,
  imagePath = '',
  initials = '',
  className = '',
  isEditable = false,
  onError,
  fileAllowedSize,
  onAvatarChange
}: TAvatarProps): ReactElement => {
  const [image, setImage] = useState<string>(imagePath)
  const getFiles = (files: File[]) => {
    if (files && files[0]) {
      setImage(URL.createObjectURL(files[0]))
      onAvatarChange?.(files[0])
    }
  }
  const style = {
    backgroundImage: image ? `url(${image})` : 'none'
  }

  return (
    <div
      id={id}
      className={classNames(`avatar avatar--${color} avatar--${type} avatar--${size}`, className, {
        'avatar--image': image,
        'avatar--edit': isEditable
      })}
      style={style}
    >
      {!image ? initials : null}
      {isEditable && (
        <FileUpload
          onError={onError}
          fileAllowedSize={fileAllowedSize}
          multiple={false}
          withFilePreview={false}
          getFiles={getFiles}
          allowedTypes=".png, .jpg, .jpeg"
          mode={FileUploadMode.edit}
        />
      )}
    </div>
  )
}
