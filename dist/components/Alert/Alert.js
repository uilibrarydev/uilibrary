import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import { ICONS_MAPPING, TYPE_MAPPING } from './consts.js';
import classNames from 'classnames';
import { Text } from '../Text/Text.js';
import { Button } from '../Button/Button.js';
import { IconDismissFilled } from '../SVGIcons/IconDismissFilled.js';
import { IconDynamicComponent } from '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../../utils/helpers.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import '../Button/consts.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';

var Alert = function Alert(props) {
  var buttonProps = props.buttonProps,
    _props$type = props.type,
    type = _props$type === void 0 ? 'information' : _props$type,
    _props$position = props.position,
    position = _props$position === void 0 ? 'inline' : _props$position,
    text = props.text,
    subtext = props.subtext,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('alert', "alert--".concat(type, " alert--").concat(position), className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert__content"
  }, /*#__PURE__*/React.createElement(IconDynamicComponent, {
    componentName: ICONS_MAPPING[type],
    size: "small",
    type: TYPE_MAPPING[type]
  }), /*#__PURE__*/React.createElement("div", {
    className: "alert__text pl-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    type: "primary",
    size: "standard",
    weight: "regular",
    lineHeight: "large"
  }, text), subtext ? /*#__PURE__*/React.createElement(Text, {
    className: 'mt-4',
    type: "secondary",
    size: "small",
    weight: "regular",
    lineHeight: "large"
  }, subtext) : null), buttonProps ? /*#__PURE__*/React.createElement("div", {
    className: "alert__actions"
  }, buttonProps.confirm && /*#__PURE__*/React.createElement(Button, _extends({
    size: "medium",
    type: "secondary"
  }, buttonProps.confirm)), buttonProps.cancel && /*#__PURE__*/React.createElement(Button, _extends({
    size: "medium",
    type: "tertiary",
    className: "ml-12"
  }, buttonProps.cancel))) : null), closeIcon ? /*#__PURE__*/React.createElement(IconDismissFilled, {
    type: TYPE_MAPPING[type],
    size: "xsmall",
    className: "ml-12 pointer",
    onClick: onClose
  }) : null));
};

export { Alert };
