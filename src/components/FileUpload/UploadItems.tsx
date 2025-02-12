import React from 'react'
import { Text } from '../Text'
import type { IUploadItemPropTypes } from './types'
import { useFormProps } from '../../hooks'
import { openFileInNewWindow } from '../../utils/helpers'
import { ErrorMessage } from '../../helperComponents'
import IconDelete from '../SVGIcons/IconDelete'
import { ButtonIcon } from '../ButtonIcon'
import { Progress } from '../Progress'
import { Image } from '../Image'

export const UploadItems = (props: IUploadItemPropTypes): JSX.Element => {
  const { files, onRemove, withFilePreview, handleFileClick } = props
  const { errors } = useFormProps()
  const filesErrors = errors && errors.files && errors.files.length > 0

  return (
    <>
      {files.map((file, index) => {
        return (
          <div
            className={`upload-item mt-4 ${
              filesErrors && errors.files[index]?.message ? 'upload-item--error' : ''
            }`}
            key={index}
          >
            <div className="upload-item__inner">
              <div className="upload-item__content">
                {/*Todo need to add imagePath after uploading image*/}
                <div className={'upload-item__image'}>
                  <Image isBackgroundImage={true} backgroundSize={'cover'} imagePath={''} />
                </div>
                <div className="upload-item__content__inner pr-8">
                  <Text
                    size="small"
                    lineHeight="medium"
                    className="upload-item__text"
                    onClick={(e) =>
                      withFilePreview &&
                      openFileInNewWindow({
                        e,
                        file,
                        handleFileClick
                      })
                    }
                  >
                    {file.name}
                  </Text>
                  {filesErrors && <ErrorMessage message={errors.files[index]?.message} />}
                </div>
                <ButtonIcon
                  size="small"
                  iconProps={{ Component: IconDelete }}
                  onClick={() => {
                    onRemove(file, index)
                  }}
                />
              </div>
              {/*Todo need to show progress until image will be uploaded*/}
              <Progress type={'linear'} size={'small'} noText={true} className={'mt-4'} />
            </div>
          </div>
        )
      })}
    </>
  )
}
