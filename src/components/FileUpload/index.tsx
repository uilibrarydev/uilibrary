import React, { useCallback, useRef } from 'react'
import { TFileUploadProps } from './types'
import Button from '../Button'
import Label from '../../helperComponents/Label'
import { getFormattedValues, uniqueFiles } from '../../utils'
import UploadItems from './uploadItems'
import '../../assets/styles/components/_upload.scss'

const FileUpload = (props: TFileUploadProps): JSX.Element | null => {
  const {
    allowedTypes = 'text/plain, image/*, .pdf, .doc, .docx',
    label,
    getFiles,
    removeFiles,
    handleFileClick,
    name,
    setFieldValue,
    toBase64,
    required,
    disabled,
    buttonText,
    withFilePreview = true,
    multiple = true,
    uploadedFiles,
    value
  } = props
  const files = (value as File[]) || uploadedFiles || []
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onUploadClick = () => {
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

  const setFiles = (selectedFiles: File[]) => {
    updateInForm(selectedFiles)
    if (getFiles) {
      if (toBase64) {
        getFormattedValues(selectedFiles)
      } else {
        getFiles(selectedFiles)
      }
    }
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target?.files as FileList
      const fileArray = multiple ? Array.from(fileList) : [fileList[0]]

      if (fileArray) {
        const updatedFiles = uniqueFiles(multiple ? [...fileArray, ...files] : fileArray)
        setFiles(updatedFiles)
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    },
    [files, multiple]
  )

  const handleFileRemove = useCallback(
    (file: File, index: number) => {
      if (files) {
        const filteredFiles = files.filter((_, i) => i !== index)
        updateInForm(filteredFiles)
        if (removeFiles) {
          removeFiles(file)
        }
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
          multiple={multiple}
          className="hide"
          ref={fileInputRef}
          accept={allowedTypes}
          onChange={handleChange}
        />
        <Button
          type="secondary"
          size="medium"
          disabled={disabled}
          iconProps={{ name: 'attach', alignment: 'left' }}
          onClick={onUploadClick}
          buttonText={buttonText}
        />
        <UploadItems
          handleFileClick={handleFileClick}
          onRemove={handleFileRemove}
          files={files}
          withFilePreview={withFilePreview}
        />
      </div>
    </div>
  )
}

export default FileUpload
