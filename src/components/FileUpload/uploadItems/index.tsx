import React from 'react'
import Text from '../../Text'
import { TUploadItemPropTypes } from './types'
import '../../../assets/styles/components/_upload.scss'
import Button from '../../Button'
import ErrorMessage from '../../../helperComponents/ErrorMessage'
import { openFileInNewWindow } from '../../../utils'
import { useFormProps } from '../../../hooks/useFormProps'

const UploadItems = (props: TUploadItemPropTypes): JSX.Element => {
  const { files, onRemove, withFileView,handleClick } = props
  const { errors } = useFormProps()
  const filesErrors = errors && errors.files && errors.files.length > 0;



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
              <div className="upload-item__content mb-2">
                <div className="upload-item__content__inner pr-8">
                  <Text
                    size="small"
                    lineHeight="medium"
                    className="upload-item__text"
                    onClick={(e) => withFileView && openFileInNewWindow({
                      e,
                      file,
                      handleClick,
                    })}
                  >
                    {file.name}
                  </Text>
                  {filesErrors && <ErrorMessage message={errors.files[index]?.message} />}
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
            </div>
          </div>
        )
      })}
    </>
  )
}

export default UploadItems
