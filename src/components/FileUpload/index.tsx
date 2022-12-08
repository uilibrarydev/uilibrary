import React, { useRef, useState } from 'react'
import IconComp from '../../components/Icon'
import UploadedState from './uploaded-state'
import './index.scss'

const FileUpload = (props: TFileUploadPropTypes): JSX.Element | null => {
  const { allowedTypes = ['*'], label, getFiles, name, setFieldValue, ...rest } = props

  const [files, setFiles] = useState(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const renderAllowedFileTypes = () => {
    return allowedTypes
      .join(', ')
      .split('')
      .map((type: string, index: number) => <span key={index}>{type}</span>)
  }

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleChange = (event: TEventType) => {
    setFiles(event?.target?.files)
    if (name) {
      setFieldValue(name, event?.target?.files)
    }
    if (getFiles) {
      getFiles(event?.target?.files)
    }
  }

  const renderUploadedFile = () => {
    if (files) {
      return (
        <div>
          <UploadedState name={files[0]?.['name']} />
        </div>
      )
    }

    return (
      <div>
        {/* TODO use Text component */}
        <div>Թույլատրելի տեսակներ</div>
        {renderAllowedFileTypes()}
      </div>
    )
  }
  return (
    <div>
      <div onClick={handleClick}>
        <IconComp name="fileUpload" size="small" color="inputBorderError" withWrapper />
        {label && <span>{label}</span>}
      </div>

      <div>{renderUploadedFile()}</div>
      <input name={name} type="file" className="hide" {...rest} />
    </div>
  )
}

export default FileUpload
