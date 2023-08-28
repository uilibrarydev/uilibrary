import React, { useCallback, useMemo, useRef } from 'react'
import { TFileUploadProps } from './types'
import '../../assets/styles/components/_upload.scss'
import Button from '../Button'
import Label from '../../helperComponents/Label'
import { getFormattedValues } from '../../utils'
import UploadItems from './uploadItems'
import { useFormProps } from '../../hooks/useFormProps'

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
    buttonText,
    withFileView = true,
    uploadedFiles,
    value
  } = props
  const files = (value as File[]) || uploadedFiles || []
  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const updateInForm = useCallback(
    (values: File[] | null) => {
      if (name && setFieldValue) {
        setFieldValue(name, values as TFormValue)
      }
    },
    [name, setFieldValue]
  )

  const createAcceptFormat = useMemo(
    () => (allowedTypes.includes('*') ? '*' : allowedTypes.map((type) => '.' + type).join(',')),
    [allowedTypes]
  )

  const setFiles = (selectedFiles: FileList) => {
    const fileArray = Array.from(selectedFiles)
    updateInForm([...files, ...fileArray])
    if (getFiles) {
      if (toBase64) {
        getFormattedValues(fileArray)
      } else {
        getFiles(fileArray)
      }
    }
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target?.files
      if (selectedFiles) {
        setFiles(selectedFiles)
      }
    },
    [value, toBase64]
  )

  const handleFileRemove = useCallback(
    (file: File, index: number) => {
      if (value) {
        const filteredFiles = files.filter((_, i) => i !== index)
        updateInForm(filteredFiles)
        if (removeFiles) {
          removeFiles(file)
        }
      }
    },
    [value, removeFiles]
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
        <UploadItems onRemove={handleFileRemove} files={files} withFileView={withFileView} />
      </div>
    </div>
  )
}

export default FileUpload
