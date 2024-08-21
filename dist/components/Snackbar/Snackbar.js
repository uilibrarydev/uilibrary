import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { Text } from '../Text/Text.js';
import { Button } from '../Button/Button.js';
import { ICONS_MAPPING, TYPE_MAPPING, DEFAULT_DURATION } from './consts.js';
import { IconDynamicComponent } from '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import 'classnames';
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
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import '../../helperComponents/IconDynamicComponent/constants.js';

var CustomToast = function CustomToast(_ref) {
  var actionProps = _ref.actionProps,
    toastId = _ref.toastId,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'information' : _ref$type,
    text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    "data-id": "".concat(type, "-toast-message"),
    className: "snackbar",
    key: toastId
  }, /*#__PURE__*/React.createElement("div", {
    className: "snackbar__content"
  }, /*#__PURE__*/React.createElement(IconDynamicComponent, {
    componentName: ICONS_MAPPING[type],
    type: TYPE_MAPPING[type],
    size: "medium"
  }), /*#__PURE__*/React.createElement(Text, {
    className: "snackbar__text pl-16 pr-8",
    type: "primary",
    size: "standard",
    weight: "regular",
    lineHeight: "large"
  }, text)), actionProps ? /*#__PURE__*/React.createElement(Button, _extends({
    size: "small",
    type: "tertiary"
  }, actionProps, {
    onClick: function onClick(e) {
      var _actionProps$onClick;
      toast.dismiss(toastId);
      actionProps === null || actionProps === void 0 || (_actionProps$onClick = actionProps.onClick) === null || _actionProps$onClick === void 0 || _actionProps$onClick.call(actionProps, e);
    }
  })) : null);
};
var notify = function notify(toastProps) {
  var toastId = toastProps.toastId,
    closeSnackbar = toastProps.closeSnackbar,
    actionProps = toastProps.actionProps,
    _toastProps$duration = toastProps.duration,
    duration = _toastProps$duration === void 0 ? DEFAULT_DURATION : _toastProps$duration;
  toast(function () {
    return CustomToast(toastProps);
  }, {
    bodyClassName: '__body',
    className: '_container',
    toastId: toastId,
    autoClose: actionProps ? false : duration
  });
  toast.onChange(function (payload) {
    if (payload.status === 'removed') {
      closeSnackbar === null || closeSnackbar === void 0 || closeSnackbar(payload.id);
    }
  });
};
var Snackbar = function Snackbar(props) {
  var _props$duration = props.duration,
    duration = _props$duration === void 0 ? 1000 : _props$duration,
    _props$position = props.position,
    position = _props$position === void 0 ? 'bottom-center' : _props$position;
  return /*#__PURE__*/React.createElement(ToastContainer, {
    theme: "light",
    hideProgressBar: true,
    transition: Slide,
    position: position,
    autoClose: duration,
    closeButton: function closeButton() {
      return null;
    }
  });
};

export { Snackbar, notify };
