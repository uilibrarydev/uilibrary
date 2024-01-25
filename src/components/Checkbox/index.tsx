import React, { ForwardedRef, useRef, useMemo } from 'react'
import classnames from 'classnames'
import { Popover } from '../../components'
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
    afterLink,
    helperText = '',
    popoverAddons
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

  const checkboxLabelPopover = popoverAddons ? (
    <Popover id={`${popoverAddons.id}`} {...popoverAddons}>
      <div id={`${popoverAddons.id}`}>
        <Icon
          name="info"
          type="information"
          size="xsmall"
          className={'ml-4 pointer'}
          onClick={(e) => {
            e.stopPropagation()
            changeHandler()
          }}
        />
      </div>
    </Popover>
  ) : null

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
          <Link dataId={dataId} url={link} target="_blank">
            {label}
          </Link>
          {afterLink && <span className="ml-4">{afterLink}</span>}
          {required && <sup>*</sup>}
        </>
      </Text>
    )
  }, [label, link])

  return (
    <>
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
        <div className="controller__right">
          <div className="flexbox">
            {checkboxLabel}
            {checkboxLabelPopover}
          </div>
          {helperText ? (
            <Text size="small" type={disabled ? 'disabled' : 'secondary'}>
              {helperText}
            </Text>
          ) : null}
        </div>
      </label>
    </>
  )
}

export default Checkbox
