import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useState, useRef, useId } from 'react';
import classNames from 'classnames';
import 'dayjs';
import { OptionItem } from '../../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import { useGetElemSizes } from '../../../hooks/useGetElemSizes.js';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick.js';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-dom';
import 'framer-motion';
import '../SharedComponents/ContentTop.js';
import { Loading } from '../SharedComponents/Loading.js';
import '../../Input/Input.js';
import { ButtonSelectWrapper } from '../SharedComponents/ButtonSelectWrapper/ButtonSelectWrapper.js';
import '../../../extends-a63feb99.js';
import '../../Checkbox/Checkbox.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../Tooltip/types.js';
import '../../../hooks/useHideOnScroll.js';
import '../../../consts/index.js';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../FileUpload/types.js';
import '../../Button/Button.js';
import '../../../objectWithoutProperties-b86e0c22.js';
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
import '../../SVGIcons/IconDismissFilled.js';
import '../../SVGIcons/IconSearchFilled.js';
import '../../SVGIcons/IconSelectAllOff.js';
import 'react-input-mask';
import 'react-number-format';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../SharedComponents/ButtonSelectWrapper/Button/Button.js';
import '../../SVGIcons/IconCaretDownFilled.js';
import '../../SVGIcons/IconCaretUpFilled.js';
import '../../../hooks/useGetHasBottomSpace.js';
import '../../../hooks/useChangePositionsOnScroll.js';

var ButtonSelect = function ButtonSelect(props) {
  var size = props.size,
    className = props.className,
    isLoading = props.isLoading,
    options = props.options,
    name = props.name,
    setSelectedItem = props.setSelectedItem,
    setFieldValue = props.setFieldValue,
    isRequiredField = props.isRequiredField,
    selectedItem = props.selectedItem,
    labelLeftIconProps = props.labelLeftIconProps,
    tooltipAddons = props.tooltipAddons,
    dropdownWidth = props.dropdownWidth,
    avatar = props.avatar,
    labelRightIconComponent = props.labelRightIconComponent,
    optionRightIconComponent = props.optionRightIconComponent,
    _props$align = props.align,
    align = _props$align === void 0 ? 'left' : _props$align,
    value = props.value,
    placeHolder = props.placeHolder,
    offsets = props.offsets,
    dataId = props.dataId,
    type = props.type;
  var currentSelection = value || selectedItem;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var containerRef = useRef(null);
  var scrollRef = useRef(null);
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dropdownRef = _useState4[0],
    setDropdownRef = _useState4[1];
  var _useGetElemSizes = useGetElemSizes(scrollRef.current),
    scrollHeight = _useGetElemSizes.scrollHeight;
  var closeDropdown = function closeDropdown() {
    return setIsOpen(false);
  };
  useOnOutsideClick(containerRef.current, closeDropdown, isOpen, useId());
  var onItemDeselect = function onItemDeselect() {
    return onItemSelect(null);
  };
  var onItemSelect = function onItemSelect(value) {
    if (setSelectedItem) {
      setSelectedItem(value);
    }
    if (name && setFieldValue) {
      setFieldValue(name, value);
    }
    closeDropdown();
  };
  var clickHandler = function clickHandler(isSelected) {
    return function (_ref) {
      var value = _ref.value;
      if (!isSelected) {
        onItemSelect(value);
        return;
      }
      if (!isRequiredField) {
        onItemDeselect();
      }
    };
  };
  return /*#__PURE__*/React.createElement(ButtonSelectWrapper, {
    size: size,
    className: className,
    dropdownWidth: dropdownWidth,
    align: align,
    offsets: offsets,
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    containerRef: containerRef.current,
    setContainerRef: containerRef,
    dropdownRef: dropdownRef,
    setDropdownRef: setDropdownRef,
    placeHolder: placeHolder,
    dataId: dataId,
    type: type
  }, isLoading ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    className: classNames('select__options__scroll', 'scrollbar', 'scrollbar--vertical', {
      'mr-6': scrollHeight > 300
    })
  }, options.map(function (item) {
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
  }))));
};

export { ButtonSelect };
