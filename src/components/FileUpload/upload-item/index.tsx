import React from 'react'
import Text from '../../Text'
import { TUploadItemPropTypes } from './types'
import '../../../assets/styles/components/_upload.scss'
import Button from '../../Button'
import Progress from '../../Progress'
import Image from '../../Image'
import ErrorMessage from '../../../helperComponents/ErrorMessage'

const UploadItem = (props: TUploadItemPropTypes): JSX.Element => {
  const { files, onRemove, isFileUploaded = false, error, viewFiles } = props

  const openFileInNewWindow = (file: File) => {
    const fileURL = URL.createObjectURL(file)
    window.open(fileURL)
  }
  // TODO check this
  // const iconName = FILE_ICON_NAME[fileType] || FILE_ICON_NAME.png
  return (
    <>
      {files.map((file, index) => (
        <div className="upload-item mt-4" key={index}>
          {isFileUploaded ? (
            <div className="upload-item__image">
              <Image
                isBackgroundImage={true}
                backgroundSize="cover"
                imagePath="static/media/src/assets/images/avatar.jpg"
              />
            </div>
          ) : null}

          <div className="upload-item__inner">
            <div className="upload-item__content mb-2">
              <div className="upload-item__content__inner pr-8">
                <Text
                  size="small"
                  lineHeight="medium"
                  className="upload-item__text"
                  onClick={(e) => {
                    if (viewFiles) {
                      e.preventDefault()
                      openFileInNewWindow(file)
                    }
                  }}
                >
                  {file.name}
                </Text>
                {error ? <ErrorMessage message="Maximum image size: 8 MB" /> : null}
              </div>
              <Button
                type="tertiary"
                size="small"
                iconProps={{ name: 'trash' }}
                onClick={() => {
                  onRemove(file, index)
                }}
              />
            </div>
            {!isFileUploaded ? <Progress size="small" noText={true} /> : null}
          </div>
        </div>
      ))}
    </>
  )
}

export default UploadItem
