import React from 'react'
import './index.css'

const Input = (props: TComponentProps): JSX.Element => {
  const { value = '', className, error, onChange } = props

  return (
    <div className={`input-container ${className}`}>
      <input value={value} onChange={onChange} />
      {error && <p className="error-message">*{error}</p>}
    </div>
  )
}

export default Input
