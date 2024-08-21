import { _ as _defineProperty } from '../../../../defineProperty-d5787266.js';
import React, { useRef, useMemo } from 'react';
import classNames from 'classnames';
import { Button } from './Button/Button.js';
import { useGetElemSizes } from '../../../../hooks/useGetElemSizes.js';
import { useGetElemPositions } from '../../../../hooks/useGetElemPositions.js';
import { DROPDOWN_AND_INPUT_GAP } from '../../../../consts/index.js';
import { noop } from '../../../../utils/helpers.js';
import '../../../../hooks/useScreenSize.js';
import { useGetHasBottomSpace, useGetHasTopSpace } from '../../../../hooks/useGetHasBottomSpace.js';
import 'react-hook-form';
import { useChangePositionsOnScroll } from '../../../../hooks/useChangePositionsOnScroll.js';
import '../../../../typeof-3b51e673.js';
import '../../../Text/Text.js';
import 'dayjs';
import '../../../SVGIcons/IconCaretDownFilled.js';
import '../../../SVGIcons/IconCaretUpFilled.js';
import '../../../../slicedToArray-c937067d.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ButtonSelectWrapper = function ButtonSelectWrapper(props) {
  var children = props.children,
    size = props.size,
    className = props.className,
    dropdownWidth = props.dropdownWidth,
    _props$align = props.align,
    align = _props$align === void 0 ? 'left' : _props$align,
    offsets = props.offsets,
    isOpen = props.isOpen,
    setIsOpen = props.setIsOpen,
    containerRef = props.containerRef,
    setContainerRef = props.setContainerRef,
    dropdownRef = props.dropdownRef,
    setDropdownRef = props.setDropdownRef,
    selectedValues = props.selectedValues,
    placeHolder = props.placeHolder,
    dataId = props.dataId,
    disabled = props.disabled,
    _props$type = props.type,
    type = _props$type === void 0 ? 'secondary' : _props$type;
  var buttonRef = useRef(null);
  var openDropdown = function openDropdown() {
    return setIsOpen(true);
  };
  var _useGetElemPositions = useGetElemPositions(buttonRef.current),
    bottom = _useGetElemPositions.bottom,
    left = _useGetElemPositions.left,
    top = _useGetElemPositions.top,
    right = _useGetElemPositions.right;
  var _useGetElemSizes = useGetElemSizes(containerRef),
    containerWidth = _useGetElemSizes.width;
  var _useGetHasBottomSpace = useGetHasBottomSpace({
      element: dropdownRef,
      input: buttonRef.current
    }),
    hasBottomSpace = _useGetHasBottomSpace.hasBottomSpace;
  var hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: buttonRef.current
  });
  var selectedItemsLabels = useMemo(function () {
    if (!selectedValues) return '';
    if ((selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length) === 0) return '';
    if ((selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length) === 1) return "".concat(selectedValues[0].label);
    return " ".concat(selectedValues[0].label, " +").concat(selectedValues.length - 1);
  }, [selectedValues]);
  useChangePositionsOnScroll(buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current, dropdownRef, hasBottomSpace);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("select select--".concat(size), className),
    ref: setContainerRef
  }, /*#__PURE__*/React.createElement(Button, {
    size: size,
    type: type,
    dataId: dataId,
    isOpen: isOpen,
    buttonText: placeHolder || '',
    selectedItemsLabels: selectedItemsLabels,
    onClick: disabled ? noop : openDropdown,
    refHandler: buttonRef,
    className: "select_button"
  }), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "select__options",
    style: _objectSpread({
      left: align === 'left' ? (offsets === null || offsets === void 0 ? void 0 : offsets.left) || left : right - (dropdownWidth || containerWidth),
      width: dropdownWidth || containerWidth
    }, hasBottomSpace || !hasTopSpace ? {
      top: (offsets === null || offsets === void 0 ? void 0 : offsets.top) || bottom
    } : {
      bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP
    }),
    ref: setDropdownRef
  }, children));
};

export { ButtonSelectWrapper };
