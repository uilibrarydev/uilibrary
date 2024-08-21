import { _ as _toConsumableArray } from '../../../toConsumableArray-0b5aa713.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useState, useRef, useId, useCallback } from 'react';
import { Input } from '../../Input/Input.js';
import 'classnames';
import 'dayjs';
import { OptionItem } from '../../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import { useGetElemSizes } from '../../../hooks/useGetElemSizes.js';
import { useGetElemPositions } from '../../../hooks/useGetElemPositions.js';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick.js';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import { IconCaretUpFilled } from '../../SVGIcons/IconCaretUpFilled.js';
import { IconCaretDownFilled } from '../../SVGIcons/IconCaretDownFilled.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../extends-a63feb99.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../helperComponents/Label/Label.js';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../../consts/index.js';
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

var LEVEL_LEFT_MARGIN = 10;
var NestedSelect = function NestedSelect(props) {
  var label = props.label,
    avatar = props.avatar,
    options = props.options,
    selected = props.selected,
    placeHolder = props.placeHolder,
    isRequiredField = props.isRequiredField,
    setSelectedValue = props.setSelectedValue,
    initialSelectedFolderIds = props.initialSelectedFolderIds,
    optionRightIconComponent = props.optionRightIconComponent,
    labelRightIconComponent = props.labelRightIconComponent,
    labelAddons = props.labelAddons;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    containerRef = _useState4[0],
    setContainerRef = _useState4[1];
  var _useState5 = useState(initialSelectedFolderIds || []),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedValues = _useState6[0],
    setSelectedValues = _useState6[1];
  var inputRef = useRef(null);
  var _useGetElemPositions = useGetElemPositions(inputRef.current),
    bottom = _useGetElemPositions.bottom,
    left = _useGetElemPositions.left;
  var _useGetElemSizes = useGetElemSizes(containerRef),
    width = _useGetElemSizes.width;
  var openDropdown = function openDropdown() {
    return setIsOpen(true);
  };
  var closeDropdown = function closeDropdown() {
    return setIsOpen(false);
  };
  var toggleDropdown = function toggleDropdown(e) {
    var clickedElement = e === null || e === void 0 ? void 0 : e.target;
    if (e && clickedElement.className && clickedElement.className.indexOf('icon-') !== -1) {
      setIsOpen(!isDropdownOpen);
      e.preventDefault();
    } else {
      openDropdown();
    }
  };
  useOnOutsideClick(containerRef, closeDropdown, isDropdownOpen, useId());
  var onSelect = useCallback(function (option, hasChildren) {
    var optionValue = option.value;
    if (!hasChildren) {
      setSelectedValue(optionValue === (selected === null || selected === void 0 ? void 0 : selected.value) ? null : option);
      return;
    }
    var isSelected = selectedValues.findIndex(function (i) {
      return i === optionValue;
    }) !== -1;
    if (isSelected) {
      setSelectedValues(selectedValues.filter(function (i) {
        return i !== optionValue;
      }));
    } else {
      setSelectedValues([].concat(_toConsumableArray(selectedValues), [optionValue]));
    }
  }, [selected, selectedValues]);
  var _generateFolders = function generateFolders(foldersArr, level) {
    return foldersArr.reduce(function (acc, option) {
      var value = option.value,
        children = option.children,
        disabled = option.disabled;
      var isOpen = selectedValues.indexOf(option.value) !== -1;
      var isSelected = option.value === (selected === null || selected === void 0 ? void 0 : selected.value);
      acc.push( /*#__PURE__*/React.createElement("div", {
        style: {
          paddingLeft: LEVEL_LEFT_MARGIN * level
        }
      }, /*#__PURE__*/React.createElement(OptionItem, {
        data: option,
        key: value,
        isSelected: isSelected,
        onClick: function onClick() {
          return onSelect({
            value: value,
            label: option.label
          }, !!children);
        },
        avatar: avatar,
        disabled: disabled,
        OptionRightIconComponent: optionRightIconComponent,
        LabelRightIconComponent: labelRightIconComponent,
        labelLeftIconProps: children ? {
          Component: IconCaretDownFilled,
          size: 'xxsmall'
        } : undefined
      })));
      if (isOpen && children) {
        acc.push.apply(acc, _toConsumableArray(_generateFolders(children, level + 1)));
      }
      return acc;
    }, []);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "select select--multi",
    ref: setContainerRef
  }, /*#__PURE__*/React.createElement("div", {
    onClick: toggleDropdown
  }, /*#__PURE__*/React.createElement(Input, {
    ref: inputRef,
    className: "select__input",
    label: label,
    required: isRequiredField,
    rightIconProps: {
      Component: isDropdownOpen ? IconCaretUpFilled : IconCaretDownFilled,
      size: 'xsmall'
    },
    placeholder: placeHolder,
    currentValue: (selected === null || selected === void 0 ? void 0 : selected.label.toString()) || '',
    readonly: true,
    labelAddons: labelAddons
  })), isDropdownOpen && /*#__PURE__*/React.createElement("div", {
    className: "select__options",
    style: {
      left: left,
      width: width,
      top: bottom
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "select__options__scroll scrollbar scrollbar--vertical"
  }, _generateFolders(options, 0))));
};

export { NestedSelect };
