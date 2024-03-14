import React, { ReactElement } from 'react'

import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import { Icon } from '../../Icon'
import { ButtonSelect } from '../../Select'

import { getYearOptions, noop } from '../../../utils/helpers'
import './styles.scss'

interface TProps extends ReactDatePickerCustomHeaderProps {
  months: TSelectOptions
  yearItemNumber: number
}

export const CustomHeader = (props: TProps): ReactElement => {
  const {
    months,
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    yearItemNumber,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  } = props

  const getMonthLabel = (month: number) => {
    const selectMonth = months.find((item) => item.value === month)
    return selectMonth?.label.toString()
  }

  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <div className="flexbox custom_header_container">
      <Icon
        name="arrow-left"
        size="small"
        className="cursor-pointer"
        onClick={prevMonthButtonDisabled ? noop : decreaseMonth}
        type={prevMonthButtonDisabled ? 'disabled' : 'primary'}
      />
      <div className="selects_container">
        <ButtonSelect
          offsets={{ top: 42 }} // 24+8+10
          buttonProps={{
            buttonText: year.toString(),
            iconProps: { name: 'caret-down-hover', alignment: 'right' },
            type: 'tertiary'
          }}
          size="small"
          options={getYearOptions(yearItemNumber)}
          selectedItem={year}
          setSelectedItem={(y) => changeYear(y as number)}
          dropdownWidth={100}
        />
        <ButtonSelect
          offsets={{ top: 42 }} //  24+8+10
          buttonProps={{
            buttonText: getMonthLabel(month),
            iconProps: { name: 'caret-down-hover', alignment: 'right' },
            type: 'tertiary'
          }}
          size="small"
          options={months}
          selectedItem={month}
          setSelectedItem={(m) => changeMonth(m as number)}
          dropdownWidth={150}
        />
      </div>
      <Icon
        name="arrow-right"
        size="small"
        className="cursor-pointer"
        onClick={nextMonthButtonDisabled ? noop : increaseMonth}
        type={nextMonthButtonDisabled ? 'disabled' : 'primary'}
      />
    </div>
  )
}
