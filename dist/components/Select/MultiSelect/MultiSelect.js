import { _ as _extends } from '../../../extends-a63feb99.js';
import { _ as _defineProperty } from '../../../defineProperty-d5787266.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import { _ as _objectWithoutProperties } from '../../../objectWithoutProperties-b86e0c22.js';
import React, { useState, useRef, useMemo, useEffect, useId } from 'react';
import { OptionsWrapper } from './OptionsWrapper.js';
import { Footer } from '../SharedComponents/Footer.js';
import 'classnames';
import 'dayjs';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick.js';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import 'react-dom';
import 'framer-motion';
import '../SharedComponents/ContentTop.js';
import { InputSelectWrapper } from '../SharedComponents/InputSelectWrapper/InputSelectWrapper.js';
import { ButtonSelectWrapper } from '../SharedComponents/ButtonSelectWrapper/ButtonSelectWrapper.js';
import { TRANSLATIONS_DEFAULT_VALUES } from '../constants.js';
import '../../../typeof-3b51e673.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../../utils/helpers.js';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetHasBottomSpace.js';
import '../../../hooks/useGetElemPositions.js';
import '../SharedComponents/Loading.js';
import '../../Text/Text.js';
import '../../Input/Input.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../helperComponents/Label/Label.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../../consts/index.js';
import './MultiSelectGrouped/MultiSelectGrouped.js';
import '../../Divider/Divider.js';
import '../../Empty/Empty.js';
import '../../Image/Image.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../../helperComponents/OptionItem/OptionItem.js';
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
import '../../FileUpload/types.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';
import '../../SVGIcons/IconCaretDownFilled.js';
import '../../SVGIcons/IconCaretUpFilled.js';
import './MultiBase/MultiBase.js';
import '../SharedComponents/Actions.js';
import '../../Menu/Menu.js';
import '../../SVGIcons/IconMore.js';
import '../../SVGIcons/IconDismissFilled.js';
import '../../SVGIcons/IconSearchFilled.js';
import '../../SVGIcons/IconSelectAllOff.js';
import './MultiSelectWithTabs/MultiSelectWithTabs.js';
import '../../Tab/Tab.js';
import '../../Tab/TabItem.js';
import '../../Badge/Badge.js';
import '../../../hooks/useChangePositionsOnScroll.js';
import '../SharedComponents/ButtonSelectWrapper/Button/Button.js';

var _excluded = ["options", "footerButtonProps", "selectedItems", "setSelectedItems", "name", "setFieldValue", "value", "label", "placeHolder", "isRequiredField", "labelAddons", "className", "disabled", "dropdownWidth", "align", "size", "isButtonSelect", "checkboxInfo", "translations", "hasError"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MultiSelect = function MultiSelect(props) {
  var options = props.options,
    _props$footerButtonPr = props.footerButtonProps,
    footerButtonProps = _props$footerButtonPr === void 0 ? {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    } : _props$footerButtonPr,
    selectedItems = props.selectedItems,
    setSelectedItems = props.setSelectedItems,
    name = props.name,
    setFieldValue = props.setFieldValue,
    value = props.value,
    label = props.label,
    placeHolder = props.placeHolder,
    isRequiredField = props.isRequiredField,
    labelAddons = props.labelAddons,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    disabled = props.disabled,
    dropdownWidth = props.dropdownWidth,
    _props$align = props.align,
    align = _props$align === void 0 ? 'left' : _props$align,
    size = props.size,
    isButtonSelect = props.isButtonSelect,
    checkboxInfo = props.checkboxInfo,
    translations = props.translations,
    hasError = props.hasError,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    dropdownRef = _useState2[0],
    setDropdownRef = _useState2[1];
  var initialSelected = value || selectedItems || [];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var _useState5 = useState(initialSelected),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedValues = _useState6[0],
    setSelectedValues = _useState6[1];
  var containerRef = useRef(null);
  var closeDropdown = function closeDropdown() {
    return setIsOpen(false);
  };
  var openDropdown = function openDropdown() {
    return setIsOpen(true);
  };
  var hasChange = useMemo(function () {
    if ((selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length) !== (initialSelected === null || initialSelected === void 0 ? void 0 : initialSelected.length)) {
      return true;
    }
    return (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.findIndex(function (value) {
      return (initialSelected === null || initialSelected === void 0 ? void 0 : initialSelected.findIndex(function (i) {
        return i.value === value.value;
      })) === -1;
    })) !== -1;
  }, [selectedValues, initialSelected]);
  useEffect(function () {
    setSelectedValues(value || []);
  }, [value]);
  useEffect(function () {
    if (selectedItems) {
      setSelectedValues(selectedItems || []);
    }
  }, [selectedItems]);
  var cancelSelectedItems = function cancelSelectedItems() {
    setSelectedValues(initialSelected);
    closeDropdown();
  };
  useOnOutsideClick(containerRef.current, cancelSelectedItems, isOpen, useId());
  var submitSelectedValue = function submitSelectedValue(selections, isChecked) {
    if (setSelectedItems) {
      setSelectedItems(selections, isChecked);
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections);
    }
    closeDropdown();
  };
  var applySelectedItems = function applySelectedItems(isChecked) {
    submitSelectedValue(selectedValues, isChecked);
  };
  var WrapperComponent = isButtonSelect ? ButtonSelectWrapper : InputSelectWrapper;
  var localizations = _objectSpread(_objectSpread({}, TRANSLATIONS_DEFAULT_VALUES), translations);
  var overflowText = localizations.overflowText;
  return /*#__PURE__*/React.createElement(WrapperComponent, {
    dropdownRef: dropdownRef,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    containerRef: containerRef === null || containerRef === void 0 ? void 0 : containerRef.current,
    setContainerRef: containerRef,
    dropdownWidth: dropdownWidth,
    setDropdownRef: setDropdownRef,
    size: size,
    label: label,
    align: align,
    disabled: disabled,
    className: className,
    labelAddons: labelAddons,
    placeHolder: placeHolder,
    selectedValues: selectedValues,
    isRequiredField: isRequiredField,
    overflowText: overflowText,
    hasError: hasError
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OptionsWrapper
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  , _extends({
    options: options,
    isOpen: isOpen,
    translations: translations,
    setIsOpen: setIsOpen,
    dropdownRef: dropdownRef,
    openDropdown: openDropdown,
    selectedValues: selectedValues,
    setSelectedValues: setSelectedValues,
    containerRef: containerRef === null || containerRef === void 0 ? void 0 : containerRef.current
  }, rest)), options.length ? /*#__PURE__*/React.createElement(Footer, {
    checkboxInfo: checkboxInfo,
    hasChange: hasChange,
    buttonProps: footerButtonProps,
    onCancel: cancelSelectedItems,
    onApply: applySelectedItems
  }) : null));
};

export { MultiSelect };
