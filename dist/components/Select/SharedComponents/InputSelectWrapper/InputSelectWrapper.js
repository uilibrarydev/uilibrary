import { _ as _defineProperty } from '../../../../defineProperty-d5787266.js';
import React, { useRef, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Input } from '../../../Input/Input.js';
import { useGetElemSizes } from '../../../../hooks/useGetElemSizes.js';
import { useGetElemPositions } from '../../../../hooks/useGetElemPositions.js';
import { DROPDOWN_AND_INPUT_GAP } from '../../../../consts/index.js';
import { getStringWidth, setTranslationValue, noop } from '../../../../utils/helpers.js';
import '../../../../hooks/useScreenSize.js';
import { useGetHasBottomSpace, useGetHasTopSpace } from '../../../../hooks/useGetHasBottomSpace.js';
import 'react-hook-form';
import { useChangePositionsOnScroll } from '../../../../hooks/useChangePositionsOnScroll.js';
import { IconCaretDownFilled } from '../../../SVGIcons/IconCaretDownFilled.js';
import { IconCaretUpFilled } from '../../../SVGIcons/IconCaretUpFilled.js';
import '../../../../typeof-3b51e673.js';
import '../../../../extends-a63feb99.js';
import '../../../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../../helperComponents/Label/Label.js';
import '../../../Text/Text.js';
import 'dayjs';
import '../../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../../helperComponents/IconDynamicComponent/constants.js';
import 'react-syntax-highlighter';
import '../../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../../../slicedToArray-c937067d.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InputSelectWrapper = function InputSelectWrapper(props) {
  var children = props.children,
    options = props.options,
    label = props.label,
    placeHolder = props.placeHolder,
    isRequiredField = props.isRequiredField,
    labelAddons = props.labelAddons,
    disabled = props.disabled,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    dropdownWidth = props.dropdownWidth,
    _props$align = props.align,
    align = _props$align === void 0 ? 'left' : _props$align,
    size = props.size,
    dropdownRef = props.dropdownRef,
    setDropdownRef = props.setDropdownRef,
    containerRef = props.containerRef,
    setIsOpen = props.setIsOpen,
    isOpen = props.isOpen,
    selectedValues = props.selectedValues,
    setContainerRef = props.setContainerRef,
    overflowText = props.overflowText,
    hasError = props.hasError;
  var inputRef = useRef(null);
  var _useGetElemSizes = useGetElemSizes(containerRef),
    width = _useGetElemSizes.width;
  var checkIsValueOverflowed = useCallback(function (value) {
    var elemWidth = getStringWidth(value, 14);
    return elemWidth > width - 80; // padding and width of (+number)
  }, [width]);
  var toggleDropdown = function toggleDropdown(e) {
    var clickedElement = e === null || e === void 0 ? void 0 : e.target;
    var className = clickedElement === null || clickedElement === void 0 ? void 0 : clickedElement.getAttribute('class');
    if (e && className && (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)) {
      setIsOpen(!isOpen);
      e.preventDefault();
    } else {
      setIsOpen(true);
    }
  };
  var selectedItemsLabels = useMemo(function () {
    if (!selectedValues || !selectedValues.length) {
      return '';
    }
    var onlyLabels = selectedValues.map(function (selected) {
      return selected.label;
    });
    var joinedLabel = onlyLabels.join(', ');
    return checkIsValueOverflowed(joinedLabel) ? setTranslationValue(overflowText || '', selectedValues.length) : joinedLabel;
  }, [options, selectedValues, checkIsValueOverflowed]);
  var _useGetElemPositions = useGetElemPositions(inputRef.current),
    bottom = _useGetElemPositions.bottom,
    left = _useGetElemPositions.left,
    top = _useGetElemPositions.top,
    right = _useGetElemPositions.right;
  var _useGetElemSizes2 = useGetElemSizes(containerRef),
    containerWidth = _useGetElemSizes2.width;
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
    className: classNames('select select--multi', className),
    ref: setContainerRef
  }, /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? noop : toggleDropdown
  }, /*#__PURE__*/React.createElement(Input, {
    readonly: true,
    label: label,
    ref: inputRef,
    hasError: hasError,
    className: "select__input",
    placeholder: placeHolder,
    required: isRequiredField,
    currentValue: selectedItemsLabels,
    rightIconProps: {
      Component: isOpen ? IconCaretUpFilled : IconCaretDownFilled,
      size: 'xsmall'
    },
    labelAddons: labelAddons,
    disabled: disabled,
    size: size === 'large' ? 'large' : 'small'
  })), /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement("div", {
    className: "select__options",
    ref: setDropdownRef,
    style: _objectSpread({
      left: align === 'left' ? left : right - (dropdownWidth || containerWidth),
      width: dropdownWidth || containerWidth
    }, hasBottomSpace || !hasTopSpace ? {
      top: bottom
    } : {
      bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP
    })
  }, children)));
};

export { InputSelectWrapper };
