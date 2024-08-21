import { _ as _extends } from '../../../extends-a63feb99.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React from 'react';
import { Button } from '../../Button/Button.js';
import { Checkbox } from '../../Checkbox/Checkbox.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import 'classnames';
import 'dayjs';
import '../../../helperComponents/Loader/Loader.js';
import '../../../hooks/useScreenSize.js';
import '../../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../../Button/consts.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../Tooltip/types.js';
import '../../../hooks/useHideOnScroll.js';
import '../../../hooks/useOnOutsideClick.js';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';

var Footer = function Footer(props) {
  var buttonProps = props.buttonProps,
    onApply = props.onApply,
    onCancel = props.onCancel,
    _props$hasChange = props.hasChange,
    hasChange = _props$hasChange === void 0 ? true : _props$hasChange,
    checkboxInfo = props.checkboxInfo;
  var _React$useState = React.useState((checkboxInfo === null || checkboxInfo === void 0 ? void 0 : checkboxInfo.isChecked) || false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isSelected = _React$useState2[0],
    setIsSelected = _React$useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "select__footer"
  }, /*#__PURE__*/React.createElement("div", null, checkboxInfo ? /*#__PURE__*/React.createElement(Checkbox, {
    label: checkboxInfo.label,
    selectedValue: isSelected,
    onClick: setIsSelected
  }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps.cancel || {}, {
    type: "tertiary",
    size: "medium",
    className: "mr-12",
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Button, _extends({
    disabled: !hasChange && isSelected === !!(checkboxInfo !== null && checkboxInfo !== void 0 && checkboxInfo.isChecked)
  }, buttonProps.confirm, {
    type: "primary",
    size: "medium",
    onClick: function onClick() {
      return onApply(isSelected);
    }
  }))));
};

export { Footer };
