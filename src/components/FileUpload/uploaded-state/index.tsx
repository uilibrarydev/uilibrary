import React, { FC } from 'react'

const UploadedState: FC<{ name: string }> = (props) => {
  const { name } = props
  return <div className="uploaded_state"> {name || ''}</div>
}

export default UploadedState
