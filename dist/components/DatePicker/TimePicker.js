import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import { Input } from '../Input/Input.js';
import { Label } from '../../helperComponents/Label/Label.js';
import 'classnames';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import { useImportFilesDynamically } from './hooks.js';
import { IconClock } from '../SVGIcons/IconClock.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import 'react-input-mask';
import 'react-number-format';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../consts/index.js';

var _excluded = ["value", "currentTime", "name", "setFieldValue", "label", "size", "dataId", "changeHandler", "required", "format", "locale", "dayjsLocale", "placeholderText", "hasError"];
var TimePicker = function TimePicker(props) {
  var value = props.value,
    currentTime = props.currentTime,
    name = props.name,
    setFieldValue = props.setFieldValue,
    label = props.label,
    size = props.size,
    dataId = props.dataId,
    changeHandler = props.changeHandler,
    required = props.required,
    _props$format = props.format,
    format = _props$format === void 0 ? 'HH:mm' : _props$format,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? 'hy' : _props$locale,
    _props$dayjsLocale = props.dayjsLocale,
    dayjsLocale = _props$dayjsLocale === void 0 ? 'hy-am' : _props$dayjsLocale,
    placeholderText = props.placeholderText,
    hasError = props.hasError,
    rest = _objectWithoutProperties(props, _excluded);
  var dateInitialValue = value !== undefined && Object.prototype.toString.call(value) === '[object Date]' ? value : currentTime;
  var _useState = useState(dateInitialValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTime = _useState2[0],
    setCurrentTime = _useState2[1];
  var calendarRef = useRef(null);
  useImportFilesDynamically(dayjsLocale);
  var onChange = function onChange(date) {
    setCurrentTime(date);
    if (changeHandler) {
      changeHandler(date);
    }
    if (setFieldValue && name) {
      setFieldValue(name, date);
    }
  };
  var openDatepicker = function openDatepicker() {
    if (calendarRef.current) {
      var _calendarRef$current, _calendarRef$current2;
      var isOpen = (_calendarRef$current = calendarRef.current) === null || _calendarRef$current === void 0 ? void 0 : _calendarRef$current.isCalendarOpen();
      (_calendarRef$current2 = calendarRef.current) === null || _calendarRef$current2 === void 0 || _calendarRef$current2.setOpen(!isOpen);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "picker-container input__inner"
  }, /*#__PURE__*/React.createElement(Label, {
    text: label,
    required: required,
    invalid: hasError
  }), /*#__PURE__*/React.createElement(DatePicker, _extends({
    selected: dayjs(selectedTime).isValid() ? selectedTime : null,
    locale: locale,
    showTimeSelect: true,
    showTimeSelectOnly: true,
    dateFormat: format
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ,
    ref: calendarRef
  }, rest, {
    onChange: onChange,
    customInput: /*#__PURE__*/React.createElement(Input, {
      disabled: rest.disabled,
      dataId: dataId,
      size: size,
      placeholder: placeholderText,
      rightIconProps: {
        Component: IconClock,
        onClick: openDatepicker
      }
    })
  })));
};

export { TimePicker };
