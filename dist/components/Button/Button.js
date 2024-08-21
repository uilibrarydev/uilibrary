import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React from 'react';
import classNames from 'classnames';
import 'dayjs';
import { Loader } from '../../helperComponents/Loader/Loader.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import { LITE_LOADER_TYPES, ICON_SIZE_MAPPING, ICON_TYPE_MAPPING } from './consts.js';
import '../../typeof-3b51e673.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';

var _excluded = ["buttonText", "type", "size", "className", "iconProps", "buttonActionType", "disabled", "isLoading", "formId", "dataId", "onClick", "refHandler", "children"];
var Button = function Button(props) {
  var buttonText = props.buttonText,
    _props$type = props.type,
    type = _props$type === void 0 ? 'primary' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    iconProps = props.iconProps,
    _props$buttonActionTy = props.buttonActionType,
    buttonActionType = _props$buttonActionTy === void 0 ? 'button' : _props$buttonActionTy,
    disabled = props.disabled,
    isLoading = props.isLoading,
    formId = props.formId,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    onClick = props.onClick,
    _props$refHandler = props.refHandler,
    refHandler = _props$refHandler === void 0 ? null : _props$refHandler,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  var justIcon = !buttonText && !children && iconProps !== undefined;
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: refHandler,
    "data-id": dataId,
    disabled: disabled,
    type: buttonActionType,
    className: classNames('btn', "btn--".concat(type), "btn--".concat(size), _defineProperty(_defineProperty({
      'btn--icon': justIcon
    }, "btn--icon-".concat((iconProps === null || iconProps === void 0 ? void 0 : iconProps.alignment) || 'left'), !isLoading && !justIcon && (iconProps === null || iconProps === void 0 ? void 0 : iconProps.Component)), 'btn--loading', isLoading), className),
    onClick: onClick,
    form: formId
  }, rest), isLoading ? /*#__PURE__*/React.createElement(Loader, {
    size: size,
    type: LITE_LOADER_TYPES.indexOf(type) === -1 ? 'dark' : 'lite'
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, iconProps !== null && iconProps !== void 0 && iconProps.Component ? /*#__PURE__*/React.createElement(iconProps.Component, {
    size: ICON_SIZE_MAPPING[size],
    type: ICON_TYPE_MAPPING[type],
    className: "btn__icon"
  }) : null, buttonText || children ? /*#__PURE__*/React.createElement("span", {
    className: "btn__text"
  }, buttonText || children) : null));
};

export { Button };
