import { _ as _extends } from '../../../extends-a63feb99.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useCallback } from 'react';
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

var Footer = function Footer(_ref) {
  var isLoading = _ref.isLoading,
    footerButtons = _ref.footerButtons,
    onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    checkboxInfo = _ref.checkboxInfo;
  var _React$useState = React.useState((checkboxInfo === null || checkboxInfo === void 0 ? void 0 : checkboxInfo.isChecked) || false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isSelected = _React$useState2[0],
    setIsSelected = _React$useState2[1];
  var handleSubmit = useCallback(function () {
    onSubmit === null || onSubmit === void 0 || onSubmit(isSelected);
  }, [onSubmit, isSelected]);
  if (!footerButtons) {
    return null;
  }
  var extraButton = footerButtons.extraButton,
    confirm = footerButtons.confirm,
    cancel = footerButtons.cancel;
  return /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__footer"
  }, checkboxInfo ? /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__footer_checkbox"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: checkboxInfo.label,
    selectedValue: isSelected,
    onClick: setIsSelected
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__footer_buttons"
  }, extraButton ? /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    type: "secondary"
  }, footerButtons.extraButton, {
    className: "mr-12"
  })) : null, /*#__PURE__*/React.createElement(Button, _extends({
    type: "secondary",
    size: "large",
    className: "mr-12",
    onClick: onClose
  }, cancel)), /*#__PURE__*/React.createElement(Button, _extends({
    type: "primary",
    size: "large",
    onClick: handleSubmit,
    disabled: isLoading
  }, confirm))));
};

export { Footer };
