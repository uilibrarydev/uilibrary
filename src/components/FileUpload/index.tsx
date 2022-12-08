import React, { useRef, useState } from 'react'
import IconComp from '../../components/Icon'
import Text from '../../components/Text'
import UploadedState from './uploaded-state'
import './index.scss'

const FileUpload = (props: TFileUploadPropTypes): JSX.Element | null => {
  const { allowedTypes = ['*'], label, getFiles, name, setFieldValue } = props

  const [files, setFiles] = useState(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  if (files) {
    return (
      <div>
        <UploadedState name={files[0]?.['name']} />
      </div>
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
