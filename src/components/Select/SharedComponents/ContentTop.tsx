import React, { useMemo } from 'react'
import { Text, Input } from '../../../index'
import { TMenuItem } from '../../Menu/types'
import { TSelectTranslations } from '../types'
import { Actions } from './Actions'

type TProps = {
  searchValue: string
  helperText?: string
  selectAll?: TCallBackFn
  setSearchValue: (value: string) => void
  clearAll?: TCallBackFn
  isSelectAllDisabled: boolean
  isAnySelected?: boolean
  translations?: TSelectTranslations
  isSearchAvailable: boolean
  hasLimitation?: boolean
}

export const ContentTop = (props: TProps): JSX.Element => {
  const {
    clearAll,
    selectAll,
    helperText,
    searchValue,
    translations,
    isAnySelected,
    setSearchValue,
    isSearchAvailable,
    hasLimitation = false,
    isSelectAllDisabled
  } = props

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
          iconProps: { name: 'close' }
        }
      ]
    }
    return options
  }, [selectAllLabel, selectAll, clearAll, clearAllLabel, isSelectAllDisabled, isAnySelected])

  const onSearch = (e: TChangeEventType) => {
    setSearchValue(e.target.value)
  }

  const removeFilter = () => setSearchValue('')

  return (
    <div className="content-top">
      {helperText ? (
        <Text size="xsmall" type="secondary" className="content-top__label">
          {helperText}
        </Text>
      ) : null}
      {isSearchAvailable && (
        <Input
          className="content-top__search"
          size="small"
          placeholder={searchInputPlaceHolder}
          handleChange={onSearch}
          currentValue={searchValue}
          rightIconProps={{
            name: searchValue ? 'close' : 'search',
            size: searchValue ? 'xsmall' : 'small',
            onClick: removeFilter
          }}
        />
      )}

      <Actions selectActions={selectActions} innerLabel={innerLabel} />
    </div>
  )
}
