import React, { useCallback, useRef, useState } from 'react'
import IconComp from '../../components/Icon'
import Text from '../../components/Text'
import UploadedState from './uploaded-state'
import { TFileUploadProps } from './types'
import './index.scss'

const FileUpload = (props: TFileUploadProps): JSX.Element | null => {
  const { allowedTypes = ['*'], label, getFiles, name, setFieldValue, toBase64 } = props

  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const getFileType = () => {
    if (file && file.type) {
      return file.type.split('/')[1]
    }
    return ''
  }

  const updateInForm = useCallback(
    (value: File | null) => {
      if (name && setFieldValue) {
        setFieldValue(name, value)
      }
    },
    [name, setFieldValue]
  )

  const getFormattedValue = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      console.log(reader.result)
    }
    reader.readAsDataURL(file)
    return reader
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target?.files && event?.target?.files[0]) {
      setFile(event?.target?.files[0])
      updateInForm(event?.target?.files[0])

      if (getFiles) {
        if (toBase64) {
          getFormattedValue(event?.target?.files[0])
        } else {
          getFiles(event?.target?.files[0])
        }
      }
    }
  }

  const handleFileRemove = useCallback(() => {
    setFile(null)
    updateInForm(null)
  }, [updateInForm])

  if (file) {
    return (
      <UploadedState name={file?.['name']} onRemove={handleFileRemove} fileType={getFileType()} />
    )
  }

  return (
    <div className="upload_button">
      <IconComp name="attach" size="xSmall" color="iconGray" withWrapper onClick={handleClick} />
      <div className="label_container">
        {label && (
          <Text color="buttonGreen" onClick={handleClick} className="upload_button_attach">
            {label}
          </Text>
        )}
        <input
          name={name}
          type="file"
          className="hide"
          ref={fileInputRef}
          accept={`${allowedTypes.join(',')}`}
          onChange={handleChange}
        />
        <Text color="footerTextGray" size="xSmall">{`Թույլատրելի տեսակներ ${allowedTypes.join(
          ', '
        )}`}</Text>
      </div>
    </div>
  )
}

export default FileUpload
