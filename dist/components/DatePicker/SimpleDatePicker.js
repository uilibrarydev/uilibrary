import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React, { useRef } from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import { Input } from '../Input/Input.js';
import { Label } from '../../helperComponents/Label/Label.js';
import 'classnames';
import { MONTHS } from '../../consts/index.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import { CustomHeader } from './CustomHeader/CustomHeader.js';
import { useImportFilesDynamically } from './hooks.js';
import { IconCalendarRight } from '../SVGIcons/IconCalendarRight.js';
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
import '../../slicedToArray-c937067d.js';
import 'react-dom';
import 'framer-motion';
import '../SVGIcons/IconChevronRight.js';
import '../Select/SharedComponents/ContentTop.js';
import '../../toConsumableArray-0b5aa713.js';
import '../Select/SharedComponents/Actions.js';
import '../Button/Button.js';
import '../../helperComponents/Loader/Loader.js';
import '../Button/consts.js';
import '../Menu/Menu.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../../hooks/useHideOnScroll.js';
import '../../hooks/useOnOutsideClick.js';
import '../../helperComponents/OptionItem/OptionItem.js';
import '../Checkbox/Checkbox.js';
import '../Popover/Popover.js';
import '../../hooks/useGetTooltipStyles.js';
import '../Tooltip/types.js';
import '../Link/Link.js';
import '../SVGIcons/IconInfo.js';
import '../Avatar/Avatar.js';
import '../FileUpload/FileUpload.js';
import '../FileUpload/types.js';
import '../FileUpload/UploadItems.js';
import '../../hooks/useFormProps.js';
import '../../context/types.js';
import '../SVGIcons/IconDelete.js';
import '../SVGIcons/IconEditFilled.js';
import '../SVGIcons/IconEdit.js';
import '../SVGIcons/IconAttach.js';
import '../Tooltip/Tooltip.js';
import '../SVGIcons/IconCheckmark.js';
import '../SVGIcons/IconMore.js';
import '../SVGIcons/IconDismissFilled.js';
import '../SVGIcons/IconSearchFilled.js';
import '../SVGIcons/IconSelectAllOff.js';
import '../SVGIcons/IconChevronLeft.js';
import '../Select/ButtonSelect/ButtonSelect.js';
import '../Select/SharedComponents/Loading.js';
import '../Select/SharedComponents/ButtonSelectWrapper/ButtonSelectWrapper.js';
import '../Select/SharedComponents/ButtonSelectWrapper/Button/Button.js';
import '../SVGIcons/IconCaretDownFilled.js';
import '../SVGIcons/IconCaretUpFilled.js';
import '../../hooks/useGetHasBottomSpace.js';
import '../../hooks/useChangePositionsOnScroll.js';

var _excluded = ["value", "currentDate", "setFieldValue", "name", "label", "size", "locale", "changeHandler", "format", "dayjsLocale", "required", "dataId", "hasError", "placeholderText", "months", "minDate", "maxDate", "dataIdPrefix", "helperText"];
var SimpleDatePicker = function SimpleDatePicker(props) {
  var value = props.value,
    currentDate = props.currentDate,
    setFieldValue = props.setFieldValue,
    name = props.name,
    label = props.label,
    size = props.size,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? 'hy' : _props$locale,
    changeHandler = props.changeHandler,
    _props$format = props.format,
    format = _props$format === void 0 ? 'M/D/YYYY' : _props$format,
    _props$dayjsLocale = props.dayjsLocale,
    dayjsLocale = _props$dayjsLocale === void 0 ? 'hy-am' : _props$dayjsLocale,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    dataId = props.dataId,
    hasError = props.hasError,
    placeholderText = props.placeholderText,
    _props$months = props.months,
    months = _props$months === void 0 ? MONTHS : _props$months,
    minDate = props.minDate,
    maxDate = props.maxDate,
    dataIdPrefix = props.dataIdPrefix,
    helperText = props.helperText,
    rest = _objectWithoutProperties(props, _excluded);
  var startYear = minDate ? minDate.getFullYear() : 1900;
  var endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5;
  var calendarRef = useRef(null);
  useImportFilesDynamically(dayjsLocale);
  var selectedDate = value !== undefined && Object.prototype.toString.call(value) === '[object Date]' ? value : currentDate;
  var openDatepicker = function openDatepicker() {
    if (calendarRef.current) {
      var _calendarRef$current, _calendarRef$current2;
      var isOpen = (_calendarRef$current = calendarRef.current) === null || _calendarRef$current === void 0 ? void 0 : _calendarRef$current.isCalendarOpen();
      (_calendarRef$current2 = calendarRef.current) === null || _calendarRef$current2 === void 0 || _calendarRef$current2.setOpen(!isOpen);
    }
  };
  var onChange = function onChange(date) {
    if (setFieldValue && name) {
      setFieldValue(name, date);
    }
    if (changeHandler) {
      changeHandler(date);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "picker-container"
  }, /*#__PURE__*/React.createElement(Label, {
    text: label,
    required: required,
    invalid: hasError
  }), /*#__PURE__*/React.createElement(DatePicker, _extends({
    minDate: minDate,
    maxDate: maxDate,
    selected: dayjs(selectedDate).isValid() ? selectedDate : null,
    locale: locale
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ,
    ref: calendarRef,
    customInput: /*#__PURE__*/React.createElement(Input, {
      size: size,
      dataId: dataId,
      helperText: helperText,
      datePlaceHolderText: label ? '' : placeholderText,
      rightIconProps: {
        Component: IconCalendarRight,
        onClick: openDatepicker
      },
      currentValue: selectedDate ? dayjs(selectedDate.toString()).format(format) : ''
    })
  }, rest, {
    onChange: onChange,
    renderCustomHeader: function renderCustomHeader(props) {
      return /*#__PURE__*/React.createElement(CustomHeader, _extends({}, props, {
        months: months,
        startYear: startYear,
        endYear: endYear,
        dataPrefix: dataIdPrefix
      }));
    }
  })));
};

export { SimpleDatePicker };
