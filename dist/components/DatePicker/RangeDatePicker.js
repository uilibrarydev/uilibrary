import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import { Input } from '../Input/Input.js';
import { DateFormat } from './types.js';
import { useImportFilesDynamically } from './hooks.js';
import { isSameDay } from '../../utils/helpers.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../extends-a63feb99.js';
import '../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'classnames';
import 'react-number-format';
import '../../helperComponents/Label/Label.js';
import '../Text/Text.js';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../hooks/useScreenSize.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../SVGIcons/IconCheckmarkCircleFilled.js';

var RangeDatePicker = function RangeDatePicker(props) {
  var value = props.value,
    _props$currentDates = props.currentDates,
    currentDates = _props$currentDates === void 0 ? [] : _props$currentDates,
    setFieldValue = props.setFieldValue,
    name = props.name,
    changeHandler = props.changeHandler,
    dataId = props.dataId,
    _props$format = props.format,
    format = _props$format === void 0 ? DateFormat.LongDate : _props$format,
    maxDate = props.maxDate,
    minDate = props.minDate,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? 'hy' : _props$locale,
    _props$dayjsLocale = props.dayjsLocale,
    dayjsLocale = _props$dayjsLocale === void 0 ? 'hy-am' : _props$dayjsLocale,
    disabled = props.disabled,
    placeholderText = props.placeholderText;
  useImportFilesDynamically(dayjsLocale);
  var dateInitialValue = value !== undefined && Array.isArray(value) ? value : currentDates;
  var _useState = useState(dateInitialValue),
    _useState2 = _slicedToArray(_useState, 2),
    rangeArray = _useState2[0],
    setRangeDate = _useState2[1];
  var onChange = function onChange(date) {
    if (date && Array.isArray(date)) {
      setRangeDate(date);
      if (changeHandler) {
        changeHandler(date);
      }
      if (setFieldValue && name) {
        setFieldValue(name, date);
      }
    }
  };
  useEffect(function () {
    setRangeDate(dateInitialValue);
  }, [dateInitialValue]);
  if (!Array.isArray(rangeArray)) {
    return null;
  }
  var formatDate = function formatDate(date) {
    return date ? dayjs(date).format(format) : '';
  };
  var checkRange = function checkRange() {
    var _rangeArray = _slicedToArray(rangeArray, 2),
      startDate = _rangeArray[0],
      endDate = _rangeArray[1];
    if (!startDate || !endDate) {
      onChange([null, null]);
    }
  };
  var renderCurrentSelectedDate = function renderCurrentSelectedDate(rangeArray) {
    var _rangeArray2 = _slicedToArray(rangeArray, 2),
      startDate = _rangeArray2[0],
      endDate = _rangeArray2[1];
    var startDateFormatted = formatDate(startDate);
    var endDateFormatted = formatDate(startDate);
    if (isSameDay(startDate, endDate) || !rangeArray[1]) {
      return startDateFormatted;
    }
    return "".concat(startDateFormatted, " - ").concat(endDateFormatted);
  };
  return /*#__PURE__*/React.createElement(DatePicker, {
    locale: locale,
    minDate: minDate,
    maxDate: maxDate,
    startDate: rangeArray[0],
    endDate: rangeArray[1],
    selectsRange: true,
    disabled: disabled,
    onChange: onChange,
    onClickOutside: checkRange,
    customInput: /*#__PURE__*/React.createElement("div", {
      className: "date-picker_input-container"
    }, /*#__PURE__*/React.createElement(Input, {
      dataId: dataId,
      disabled: disabled,
      placeholder: placeholderText
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ,
      currentValue: renderCurrentSelectedDate(rangeArray)
    }))
  });
};

export { RangeDatePicker };
