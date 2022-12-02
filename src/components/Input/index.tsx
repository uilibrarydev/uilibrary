import React from 'react'
import { InputPropTypes } from './types'
import './index.css'

export const Input = React.forwardRef<HTMLInputElement, InputPropTypes>(
  ({ className, ...rest }, ref): JSX.Element => {
    return (
      <div className={`input-container ${className}`}>
        <input ref={ref} {...rest} />
        {/* {error && <p className="error-message">*{error}</p>} */}
      </div>
    )
  }
)

Input.displayName = 'FormInput'
export default Input

// const Input = (props) => {
//   const {className, ...rest} = props
//   return (
//     <div className={`input-container ${className}`}>
//       <input    {...rest}  />
//     </div>
//   )
// }

// export default Input
