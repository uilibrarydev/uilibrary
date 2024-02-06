import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react'
import {Checkbox} from '../Checkbox';

const CheckboxWithRef = forwardRef(Checkbox)

type IndeterminateCheckboxProps = {
  indeterminate: boolean
  checked: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

export const IndeterminateCheckbox = forwardRef(
  (
    { indeterminate, checked, onChange }: IndeterminateCheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = useRef()
    const resolvedRef: any = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    const handleChange = (v: boolean) => {
      onChange({ target: { checked: v } })
    }

    return <CheckboxWithRef value={checked} onClick={handleChange} ref={resolvedRef} />
  }
)

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'
