import { _ as _extends } from '../../../extends-a63feb99.js';
import { _ as _toConsumableArray } from '../../../toConsumableArray-0b5aa713.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import { _ as _objectWithoutProperties } from '../../../objectWithoutProperties-b86e0c22.js';
import React, { useState, useId, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useHideOnScroll } from '../../../hooks/useHideOnScroll.js';
import 'dayjs';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick.js';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import { FilterDropdownContent } from './FilterDropdown.js';
import { FilterGroupDropdownContent } from './FilterGroupDropdown.js';
import { Footer } from '../SharedComponents/Footer.js';
import 'classnames';
import 'react-syntax-highlighter';
import 'framer-motion';
import '../SharedComponents/ContentTop.js';
import { Loading } from '../SharedComponents/Loading.js';
import { Input } from '../../Input/Input.js';
import { IconDismissFilled } from '../../SVGIcons/IconDismissFilled.js';
import { IconSearchFilled } from '../../SVGIcons/IconSearchFilled.js';
import '../../../consts/index.js';
import '../../../helperComponents/OptionItem/OptionItem.js';
import '../../Checkbox/Checkbox.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../Tooltip/types.js';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../FileUpload/types.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../../helperComponents/Label/Label.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';
import '../SharedComponents/Actions.js';
import '../../Menu/Menu.js';
import '../../SVGIcons/IconMore.js';
import '../../SVGIcons/IconSelectAllOff.js';
import 'react-input-mask';
import 'react-number-format';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';

var _excluded = ["isLoading", "isGrouped", "options", "isOpen", "setFieldValue", "name", "footerButtonProps", "selectedItems", "setSelectedItems", "closeHandler", "parentRef"];
var FilterSelect = function FilterSelect(props) {
  var isLoading = props.isLoading,
    isGrouped = props.isGrouped,
    options = props.options,
    isOpen = props.isOpen,
    setFieldValue = props.setFieldValue,
    name = props.name,
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
    closeHandler = props.closeHandler,
    parentRef = props.parentRef,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    containerRef = _useState2[0],
    setContainerRef = _useState2[1];
  var _useState3 = useState(selectedItems),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedValues = _useState4[0],
    setSelectedValues = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    filterValue = _useState6[0],
    setFilterValue = _useState6[1];
  useOnOutsideClick(containerRef, closeHandler, isOpen, useId());
  useHideOnScroll(closeHandler);
  var onItemSelect = useCallback(function (item) {
    setSelectedValues(function (selected) {
      return [].concat(_toConsumableArray(selected), [item]);
    });
  }, []);
  var submitSelectedValue = function submitSelectedValue(selections) {
    if (setSelectedItems) {
      setSelectedItems(selections);
    }
    if (name && setFieldValue) {
      setFieldValue(name, selections);
    }
    closeHandler();
  };
  var checkIsSelected = function checkIsSelected(itemValue) {
    return selectedValues.find(function (item) {
      return item.value === itemValue;
    }) !== undefined;
  };
  var applySelectedItems = useCallback(function () {
    submitSelectedValue(selectedValues);
    closeHandler();
  }, [selectedValues]);
  var cancelSelectedItems = function cancelSelectedItems() {
    submitSelectedValue(selectedItems);
    setSelectedValues(selectedItems);
    closeHandler();
  };
  var onItemDeselect = function onItemDeselect(_ref) {
    var value = _ref.value;
    setSelectedValues(function (selected) {
      return selected.filter(function (optionValue) {
        return optionValue.value !== value;
      });
    });
  };
  var onFilter = function onFilter(e) {
    e.preventDefault();
    e.stopPropagation();
    setFilterValue(e.target.value);
  };
  var removeFilterValue = function removeFilterValue() {
    setFilterValue('');
  };
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
    className: "select filter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "select__options",
    ref: setContainerRef
  }, /*#__PURE__*/React.createElement(Input, {
    onChange: onFilter,
    className: "filter__input",
    size: "small",
    currentValue: filterValue,
    rightIconProps: {
      size: filterValue === '' ? 'small' : 'xsmall',
      Component: filterValue === '' ? IconSearchFilled : IconDismissFilled,
      onClick: removeFilterValue
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: 'select__options__scroll scrollbar scrollbar--vertical '
  }, isLoading ? /*#__PURE__*/React.createElement(Loading, null) : isGrouped ? /*#__PURE__*/React.createElement(FilterGroupDropdownContent, _extends({
    checkIsSelected: checkIsSelected,
    onItemDeselect: onItemDeselect,
    filterValue: filterValue,
    onItemSelect: onItemSelect,
    options: options
  }, rest)) : /*#__PURE__*/React.createElement(FilterDropdownContent, _extends({
    checkIsSelected: checkIsSelected,
    onItemDeselect: onItemDeselect,
    filterValue: filterValue,
    onItemSelect: onItemSelect,
    options: options
  }, rest))), isLoading ? null : /*#__PURE__*/React.createElement(Footer, {
    buttonProps: footerButtonProps,
    onCancel: cancelSelectedItems,
    onApply: applySelectedItems
  }))), parentRef);
};

export { FilterSelect };
