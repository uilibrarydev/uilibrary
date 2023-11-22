import React, { ForwardedRef, useRef, useMemo } from 'react'
import classnames from 'classnames'
import { Icon, Link, Text } from '../'
import { TCheckboxProps } from './types'
import '../../assets/styles/components/_controllers.scss'

export const Checkbox = (
  props: TCheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element | null => {
  const {
    label,
    disabled,
    required = false,
    link,
    name,
    setFieldValue,
    selectedValue,
    value,
    className = '',
    IconProps = { name: 'mark' },
    dataId = '',
    onClick,
    beforeLink,
    afterLink
  } = props

  const localRef = useRef(null)
  const inputRef = ref && Object.keys(ref).length ? ref : localRef

  const isChecked = !!value || selectedValue

  const changeHandler = () => {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, { shouldValidate: !isChecked })
    }
    if (onClick) {
      onClick(!isChecked)
    }
  }

  const checkboxLabel = useMemo(() => {
    if (!label) {
      return null
    }
    if (typeof label !== 'string') {
      return label
    }
    if (!link) {
      return (
        <Text type={disabled ? 'disabled' : 'primary'} className="controller__label">
          <>
            {label}
            {required && <sup>*</sup>}
          </>
        </Text>
      )
    }
    return (
      <Text type={disabled ? 'disabled' : 'primary'} className="controller__label">
        <>
          {beforeLink && <span className="mr-4">{beforeLink}</span>}
          <Link dataId={dataId} url={link} taget="_blank">
            {label}
          </Link>
          {afterLink && <span className="ml-4">{afterLink}</span>}
          {required && <sup>*</sup>}
        </>
      </Text>
    )
  }, [label, link])

  return (
    <label
      className={classnames('controller', {
        'controller--checkbox': true,
        'controller--disabled': disabled,
        [className]: !!className
      })}
    >
      <input
        data-id={dataId}
        type="checkbox"
        ref={inputRef}
        tabIndex={0}
        onChange={changeHandler}
        checked={Boolean(isChecked)}
        disabled={disabled}
      />
      <span className="controller__icon">
        <Icon
          name={IconProps.name}
          size="xxsmall"
          type={`${disabled ? 'disabled' : 'inverse'}`}
          className="controller__mark"
        />
      </span>
      {checkboxLabel}
    </label>
  )
}

export default Checkbox
