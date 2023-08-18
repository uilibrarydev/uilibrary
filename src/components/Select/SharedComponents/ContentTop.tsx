import React, { useMemo } from 'react'
import { Text, Input } from '../../../index'
import { TMenuItem } from '../../Menu/types'
import { TSelectTranslations } from '../types'
import { Actions } from './Actions'

type TProps = {
  searchValue: string
  helperText?: string
  selectAll: TCallBackFn
  setSearchValue: (value: string) => void
  clearAll: TCallBackFn
  isSelectAllDisabled: boolean
  isAnySelected: boolean
  translations?: TSelectTranslations
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
    isSelectAllDisabled
  } = props

  const {
    searchInputPlaceHolder,
    innerLabel = 'Group name',
    clearAllLabel = 'Clear All',
    selectAllLabel = 'Select All'
  } = translations || {}

  const selectActions = useMemo(() => {
    let options: TMenuItem[] = []

    if (selectAllLabel) {
      options = [
        {
          label: selectAllLabel,
          value: 1,
          handler: selectAll,
          disabled: isSelectAllDisabled
        }
      ]
    }
    if (clearAllLabel) {
      options = [
        ...options,
        { label: clearAllLabel, value: 2, handler: clearAll, disabled: isAnySelected }
      ]
    }
    return options
  }, [selectAllLabel, clearAllLabel, isSelectAllDisabled, isAnySelected])

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

      <Actions selectActions={selectActions} innerLabel={innerLabel} />
    </div>
  )
}
