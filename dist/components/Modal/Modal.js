import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useId } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper/AnimatePresenceWrapper.js';
import 'dayjs';
import { useOnOutsideClick } from '../../hooks/useOnOutsideClick.js';
import '../../hooks/useScreenSize.js';
import { useHideBodyScroll } from '../../hooks/useHideBodyScroll.js';
import 'react-hook-form';
import { Button } from '../Button/Button.js';
import { Text } from '../Text/Text.js';
import { IconDismissFilled } from '../SVGIcons/IconDismissFilled.js';
import '../../consts/index.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import 'react-syntax-highlighter';
import '../Button/consts.js';
import '../../utils/helpers.js';

var DESKTOP_ANIMATION = {
  initial: {
    opacity: 0.5,
    scale: 0.65
  },
  animate: {
    opacity: 1,
    scale: [0.95, 1]
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.2
    }
  },
  transition: {
    duration: 0.4,
    type: 'spring',
    damping: 55,
    stiffness: 700
  }
};
var Modal = function Modal(props) {
  var isOpen = props.isOpen,
    onClose = props.onClose,
    onSubmit = props.onSubmit,
    title = props.title,
    titleIconProps = props.titleIconProps,
    closeIcon = props.closeIcon,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'small' : _props$size,
    _props$withFooter = props.withFooter,
    withFooter = _props$withFooter === void 0 ? true : _props$withFooter,
    buttonProps = props.buttonProps,
    children = props.children,
    dataIdPrefix = props.dataIdPrefix,
    _props$closeOnOutside = props.closeOnOutsideClick,
    closeOnOutsideClick = _props$closeOnOutside === void 0 ? true : _props$closeOnOutside;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    containerRef = _useState2[0],
    setContainerRef = _useState2[1];
  useOnOutsideClick(containerRef, onClose, closeOnOutsideClick && isOpen, useId());
  useHideBodyScroll(isOpen);
  return /*#__PURE__*/React.createElement(AnimatePresenceWrapper, null, isOpen ? /*#__PURE__*/React.createElement(motion.div, {
    className: classNames('modal', "modal--".concat(size), className),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 0.4
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "modal__container",
    ref: setContainerRef
  }, DESKTOP_ANIMATION), title ? /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, titleIconProps !== null && titleIconProps !== void 0 && titleIconProps.Component ? /*#__PURE__*/React.createElement(titleIconProps.Component, _extends({
    size: "small",
    className: "mr-12"
  }, titleIconProps)) : null, /*#__PURE__*/React.createElement(Text, {
    className: "modal__title",
    weight: "semibold",
    lineHeight: "large",
    size: "medium",
    dataId: dataIdPrefix ? "".concat(dataIdPrefix, "-modal-title") : ''
  }, title), closeIcon ? /*#__PURE__*/React.createElement(Button, {
    type: "tertiary",
    size: "small",
    dataId: dataIdPrefix ? "".concat(dataIdPrefix, "-modal-close-button") : '',
    iconProps: {
      Component: IconDismissFilled
    },
    onClick: onClose
  }) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "modal__content"
  }, children), withFooter && buttonProps ? /*#__PURE__*/React.createElement("div", {
    className: "modal__footer"
  }, /*#__PURE__*/React.createElement(Button, _extends({
    type: "tertiary",
    size: "medium",
    className: "mr-12",
    onClick: onClose,
    dataId: dataIdPrefix ? "".concat(dataIdPrefix, "-modal-cancel-button") : ''
  }, buttonProps.cancel || {})), /*#__PURE__*/React.createElement(Button, _extends({
    type: "primary",
    size: "medium",
    onClick: onSubmit,
    dataId: dataIdPrefix ? "".concat(dataIdPrefix, "-modal-confirm-button") : ''
  }, buttonProps.confirm))) : null)) : null);
};

export { Modal };
