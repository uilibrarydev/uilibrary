import { _ as _extends } from '../../extends-a63feb99.js';
import React, { useCallback } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox.js';
import { Avatar } from '../../components/Avatar/Avatar.js';
import { Tooltip } from '../../components/Tooltip/Tooltip.js';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import classNames from 'classnames';
import { IconCheckmark } from '../../components/SVGIcons/IconCheckmark.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../components/Popover/Popover.js';
import '../../slicedToArray-c937067d.js';
import '../../hooks/useGetTooltipStyles.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../../components/Tooltip/types.js';
import '../../hooks/useHideOnScroll.js';
import '../../consts/index.js';
import '../../hooks/useOnOutsideClick.js';
import '../../components/Text/Text.js';
import '../../utils/helpers.js';
import '../../components/Link/Link.js';
import '../../components/SVGIcons/IconInfo.js';
import '../IconDynamicComponent/IconDynamicComponent.js';
import '../IconDynamicComponent/constants.js';
import 'react-syntax-highlighter';
import '../../components/FileUpload/FileUpload.js';
import '../../toConsumableArray-0b5aa713.js';
import '../../components/FileUpload/types.js';
import '../../components/Button/Button.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../Loader/Loader.js';
import '../../components/Button/consts.js';
import '../Label/Label.js';
import '../../components/FileUpload/UploadItems.js';
import '../../hooks/useFormProps.js';
import '../../context/types.js';
import '../ErrorMessage/ErrorMessage.js';
import '../../components/SVGIcons/IconDelete.js';
import '../../components/SVGIcons/IconEditFilled.js';
import '../../components/SVGIcons/IconEdit.js';
import '../../components/SVGIcons/IconAttach.js';

var OptionItem = function OptionItem(props) {
  var data = props.data,
    onClick = props.onClick,
    disabled = props.disabled,
    avatar = props.avatar,
    isSelected = props.isSelected,
    labelLeftIconProps = props.labelLeftIconProps,
    LabelRightIconComponent = props.LabelRightIconComponent,
    OptionRightIconComponent = props.OptionRightIconComponent,
    isCheckbox = props.isCheckbox,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    tooltipAddons = props.tooltipAddons,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId;
  var label = data.label,
    meta = data.meta,
    value = data.value;
  var handleClick = useCallback(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) {
      return;
    }
    onClick({
      value: value,
      label: label
    });
  }, [disabled, value, label, onClick]);
  var optionContent = /*#__PURE__*/React.createElement("div", {
    "data-id": dataId,
    id: "".concat(value),
    className: classNames('select__option', {
      'select__option--disabled': disabled
    }, className),
    onClick: handleClick
  }, isCheckbox ? /*#__PURE__*/React.createElement(Checkbox, {
    className: "mr-8",
    selectedValue: isSelected,
    disabled: disabled
  }) : null, !isCheckbox && isSelected ? /*#__PURE__*/React.createElement(IconCheckmark, {
    size: "xsmall",
    type: disabled ? 'disabled' : 'brand',
    className: "mr-4"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "select__option__inner"
  }, avatar ? /*#__PURE__*/React.createElement(Avatar, {
    size: "xxsmall",
    imagePath: avatar,
    className: "mr-4"
  }) : null, labelLeftIconProps !== null && labelLeftIconProps !== void 0 && labelLeftIconProps.Component ? /*#__PURE__*/React.createElement(labelLeftIconProps.Component, _extends({
    size: "xsmall",
    type: disabled ? 'disabled' : 'primary',
    className: "mr-4 select__left-icon"
  }, labelLeftIconProps)) : null, /*#__PURE__*/React.createElement("div", {
    className: "select__option__content",
    "data-id": dataId
  }, /*#__PURE__*/React.createElement("span", {
    className: "select__option__text pr-4 ".concat(disabled ? 'color-disabled' : '')
  }, label), LabelRightIconComponent && LabelRightIconComponent(value), meta ? /*#__PURE__*/React.createElement("span", {
    className: "select__option__meta ".concat(disabled ? 'color-disabled' : '')
  }, meta) : null)), OptionRightIconComponent && OptionRightIconComponent(value));
  return tooltipAddons ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, _extends({}, tooltipAddons, {
    text: "".concat(label),
    id: "".concat(value)
  })), optionContent) : optionContent;
};

export { OptionItem };
