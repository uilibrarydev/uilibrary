import { _ as _defineProperty } from '../../../defineProperty-d5787266.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useRef, useState, useCallback, useEffect, useId, useMemo } from 'react';
import classNames from 'classnames';
import { useGetElemSizes } from '../../../hooks/useGetElemSizes.js';
import { useGetElemPositions } from '../../../hooks/useGetElemPositions.js';
import { DROPDOWN_AND_INPUT_GAP } from '../../../consts/index.js';
import { noop } from '../../../utils/helpers.js';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick.js';
import '../../../hooks/useScreenSize.js';
import { useGetHasBottomSpace, useGetHasTopSpace } from '../../../hooks/useGetHasBottomSpace.js';
import 'react-hook-form';
import { Input } from '../../Input/Input.js';
import { Text } from '../../Text/Text.js';
import { OptionItem } from '../../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import 'react-dom';
import 'framer-motion';
import '../SharedComponents/ContentTop.js';
import { Loading } from '../SharedComponents/Loading.js';
import { useChangePositionsOnScroll } from '../../../hooks/useChangePositionsOnScroll.js';
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled.js';
import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled.js';
import { SELECTED_VISIBLE_MIN_COUNT } from '../constants.js';
import '../../../typeof-3b51e673.js';
import 'dayjs';
import '../../../extends-a63feb99.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../helperComponents/Label/Label.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../Checkbox/Checkbox.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../Tooltip/types.js';
import '../../../hooks/useHideOnScroll.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../FileUpload/types.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';
import '../SharedComponents/Actions.js';
import '../../Menu/Menu.js';
import '../../SVGIcons/IconMore.js';
import '../../SVGIcons/IconDismissFilled.js';
import '../../SVGIcons/IconSearchFilled.js';
import '../../SVGIcons/IconSelectAllOff.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Select = function Select(props) {
  var className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    name = props.name,
    value = props.value,
    label = props.label,
    avatar = props.avatar,
    options = props.options,
    hasError = props.hasError,
    isLoading = props.isLoading,
    isValid = props.isValid,
    withSearch = props.withSearch,
    disabled = props.disabled,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    placeHolder = props.placeHolder,
    _props$selectedItem = props.selectedItem,
    selectedItem = _props$selectedItem === void 0 ? null : _props$selectedItem,
    setFieldValue = props.setFieldValue,
    setSelectedItem = props.setSelectedItem,
    outerHelperText = props.outerHelperText,
    innerHelperText = props.innerHelperText,
    isRequiredField = props.isRequiredField,
    labelLeftIconProps = props.labelLeftIconProps,
    labelRightIconComponent = props.labelRightIconComponent,
    optionRightIconComponent = props.optionRightIconComponent,
    labelAddons = props.labelAddons,
    tooltipAddons = props.tooltipAddons;
  var scrollRef = useRef(null);
  var inputRef = useRef(null);
  var _useGetElemSizes = useGetElemSizes(scrollRef.current),
    scrollHeight = _useGetElemSizes.scrollHeight;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var containerRef = useRef(null);
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    dropdownRef = _useState6[0],
    setDropdownRef = _useState6[1];
  var currentSelection = value || selectedItem;
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    itemLabel = _useState8[0],
    setItemLabel = _useState8[1];
  var setCurrentSelectedLabel = useCallback(function () {
    var label = options.find(function (item) {
      return item.value === currentSelection;
    });
    setItemLabel((label === null || label === void 0 ? void 0 : label.label.toString()) || '');
  }, [currentSelection, options]);
  useEffect(function () {
    setCurrentSelectedLabel();
  }, [setCurrentSelectedLabel]);
  var openDropdown = function openDropdown() {
    return setIsOpen(true);
  };
  var closeDropdown = function closeDropdown() {
    return setIsOpen(false);
  };
  var handleOutsideClick = function handleOutsideClick() {
    if (!searchValue && isRequiredField) {
      setCurrentSelectedLabel();
    }
    closeDropdown();
  };
  useOnOutsideClick(containerRef.current, handleOutsideClick, isOpen, useId());
  var _useGetElemPositions = useGetElemPositions(inputRef.current),
    bottom = _useGetElemPositions.bottom,
    left = _useGetElemPositions.left,
    top = _useGetElemPositions.top;
  var _useGetElemSizes2 = useGetElemSizes(containerRef.current),
    width = _useGetElemSizes2.width;
  var filteredData = useMemo(function () {
    if (!searchValue) {
      return options;
    }
    return options.filter(function (dataItem) {
      return typeof dataItem.label === 'string' && dataItem.label.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, options]);
  var onItemSelect = function onItemSelect(value) {
    if (setSelectedItem) {
      setSelectedItem(value);
    }
    if (name && setFieldValue) {
      setFieldValue(name, value);
    }
    closeDropdown();
  };
  var onItemDeselect = function onItemDeselect() {
    return onItemSelect(null);
  };
  var onOpenOptions = function onOpenOptions(e) {
    var result = e === null || e === void 0 ? void 0 : e.target;
    var className = result === null || result === void 0 ? void 0 : result.getAttribute('class');
    if (e && className && (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)) {
      setIsOpen(!isOpen);
      e.preventDefault();
      return;
    } else {
      openDropdown();
    }
  };
  var clickHandler = function clickHandler(isSelected) {
    return function (_ref) {
      var value = _ref.value;
      setSearchValue('');
      if (!isSelected) {
        onItemSelect(value);
        return;
      }
      if (!isRequiredField) {
        onItemDeselect();
      }
    };
  };
  var onSearch = function onSearch(e) {
    setItemLabel(null);
    setSearchValue(e.target.value);
  };
  var _useGetHasBottomSpace = useGetHasBottomSpace({
      element: dropdownRef,
      input: inputRef.current
    }),
    hasBottomSpace = _useGetHasBottomSpace.hasBottomSpace;
  var hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current
  });
  useChangePositionsOnScroll(inputRef === null || inputRef === void 0 ? void 0 : inputRef.current, dropdownRef, hasBottomSpace);
  return /*#__PURE__*/React.createElement("div", {
    "data-id": "".concat(dataId, "-content"),
    className: classNames("select select--".concat(size), className),
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? noop : onOpenOptions
  }, /*#__PURE__*/React.createElement(Input, {
    size: size === 'large' ? 'large' : 'small',
    dataId: dataId,
    hasError: hasError,
    className: "select__input",
    label: label,
    onChange: onSearch,
    required: isRequiredField,
    rightIconProps: {
      Component: isOpen ? IconCaretUpFilled : IconCaretDownFilled,
      size: 'xsmall'
    },
    readonly: !withSearch || options.length <= SELECTED_VISIBLE_MIN_COUNT,
    placeholder: placeHolder,
    value: itemLabel,
    isValid: isValid,
    disabled: disabled,
    helperText: isOpen ? '' : outerHelperText,
    ref: inputRef,
    labelAddons: labelAddons,
    autoComplete: "false"
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "select__options",
    style: _objectSpread({
      left: left,
      width: width
    }, hasBottomSpace || !hasTopSpace ? {
      top: bottom
    } : {
      bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP
    }),
    ref: setDropdownRef
  }, isLoading ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "data-id": "".concat(dataId, "-options-content"),
    ref: scrollRef,
    className: classNames('select__options__scroll', 'scrollbar', 'scrollbar--vertical', {
      'mr-6': scrollHeight > 300
    })
  }, innerHelperText ? /*#__PURE__*/React.createElement("div", {
    className: "content-top"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "xsmall",
    type: "secondary",
    className: "content-top__label"
  }, innerHelperText)) : null, filteredData.map(function (item) {
    var isSelected = item.value === currentSelection;
    return /*#__PURE__*/React.createElement(OptionItem, {
      tooltipAddons: tooltipAddons,
      data: item,
      key: item.value,
      onClick: clickHandler(isSelected),
      labelLeftIconProps: labelLeftIconProps,
      OptionRightIconComponent: optionRightIconComponent,
      LabelRightIconComponent: labelRightIconComponent,
      avatar: avatar,
      disabled: item.disabled,
      isSelected: isSelected
    });
  })))));
};

export { Select };
