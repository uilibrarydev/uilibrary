import React, { useEffect, useMemo, useRef } from 'react'
import { Text } from '../../Text'
import { Input } from '../../Input'
import { TMenuItem } from '../../Menu/types'
import { TSelectTranslations } from '../types'
import { Actions } from './Actions'

type TProps = {
  searchValue?: string
  helperText?: string
  selectAll?: TCallBackFn
  setSearchValue?: (value: string) => void
  clearAll?: TCallBackFn
  isSelectAllDisabled?: boolean
  isAnySelected?: boolean
  translations?: TSelectTranslations
  isSearchAvailable?: boolean
  hasLimitation?: boolean
  hasBottomSpace: boolean
}

export const ContentTop = React.memo<TProps>((props: TProps): JSX.Element => {
  const {
    clearAll,
    selectAll,
    helperText,
    searchValue,
    translations,
    isAnySelected,
    setSearchValue,
    hasBottomSpace = true,
    isSearchAvailable = false,
    hasLimitation = false,
    isSelectAllDisabled = false
  } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const { searchInputPlaceHolder, innerLabel, clearAllLabel, selectAllLabel } = translations || {}

  const selectActions = useMemo(() => {
    let options: TMenuItem[] = []

    if (selectAll && selectAllLabel && !hasLimitation) {
      options = [
        {
          label: selectAllLabel,
          value: 1,
          handler: selectAll,
          disabled: isSelectAllDisabled,
          iconProps: { name: 'select-all' }
        }
      ]
    }
    if (clearAll && clearAllLabel) {
      options = [
        ...options,
        {
          label: clearAllLabel,
          value: 2,
          handler: clearAll,
          disabled: !isAnySelected,
          iconProps: { name: 'close-hover' }
        }
      ]
    }
    return options
  }, [selectAllLabel, selectAll, clearAll, clearAllLabel, isSelectAllDisabled, isAnySelected])
  const onSearch = (e: TChangeEventType) => {
    setSearchValue && setSearchValue(e.target.value)
  }

  const removeFilter = () => setSearchValue && setSearchValue('')
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <div className="content-top">
      {helperText ? (
        <Text size="xsmall" type="secondary" className="content-top__label">
          {helperText}
        </Text>
      ) : null}
      {isSearchAvailable && (
        <Input
          ref={inputRef}
          className="content-top__search"
          size="small"
          placeholder={searchInputPlaceHolder}
          handleChange={onSearch}
          currentValue={searchValue}
          rightIconProps={{
            name: searchValue ? 'close-hover' : 'search-hover',
            size: searchValue ? 'xsmall' : 'small',
            onClick: removeFilter
          }}
        />
      )}

      <Actions
        selectActions={selectActions}
        innerLabel={innerLabel}
        hasBottomSpace={hasBottomSpace}
      />
    </div>
  )
})

ContentTop.displayName = 'ContentTop'
