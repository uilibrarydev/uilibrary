import React, { useCallback, useMemo, useRef, useState } from 'react'
import UploadItem from './upload-item'
import { TFileUploadProps } from './types'
import '../../assets/styles/components/_upload.scss'
import Button from '../Button'
import Label from '../../helperComponents/Label'

const FileUpload = (props: TFileUploadProps): JSX.Element | null => {
  const {
    allowedTypes = ['*'],
    label,
    getFiles,
    removeFiles,
    name,
    setFieldValue,
    toBase64,
    required,
    disabled,
    isFileUploaded,
    buttonText,
    viewFiles = true
  } = props

  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const updateInForm = useCallback(
    (values: File[] | null) => {
      if (name && setFieldValue) {
        setFieldValue(name, values as TFormValue, { shouldValidate: !!values })
      }
    },
    [name, setFieldValue]
  )

  const createAcceptFormat = useMemo(
    () => (allowedTypes.includes('*') ? '*' : allowedTypes.map((type) => '.' + type).join(',')),
    [allowedTypes]
  )

  const getFormattedValues = (files: File[]) => {
    const readers: FileReader[] = []

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader()
      reader.onloadend = () => {
        console.log(reader.result)
      }
      reader.readAsDataURL(files[i])
      readers.push(reader)
    }

    return readers
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target?.files
      if (selectedFiles) {
        const fileArray = Array.from(selectedFiles)
        setFiles([...files, ...fileArray])
        updateInForm(fileArray)
        if (getFiles) {
          if (toBase64) {
            getFormattedValues(fileArray)
          } else {
            getFiles(fileArray)
          }
        }
      }
    },
    [files, toBase64]
  )

  const handleFileRemove = useCallback(
    (file: File, index: number) => {
      const filteredFiles = files.filter((_, i) => i !== index)
      setFiles(filteredFiles)

      if (removeFiles) {
        removeFiles(file)
      }
    },
    [files, removeFiles]
  )

  return (
    <div className="file-upload">
      <Label text={label} required={required} disabled={disabled} />
      <div className="file-upload__inner">
        <input
          name={name}
          type="file"
          multiple
          className="hide"
          ref={fileInputRef}
          accept={createAcceptFormat}
          onChange={handleChange}
        />
        <Button
          type="secondary"
          size="medium"
          disabled={disabled}
          iconProps={{ name: 'attach', alignment: 'left' }}
          onClick={handleClick}
          buttonText={buttonText}
        />
        <UploadItem
          onRemove={handleFileRemove}
          isFileUploaded={isFileUploaded}
          files={files}
          viewFiles={viewFiles}
        />
      </div>
    </div>
  )
}

export default FileUpload
