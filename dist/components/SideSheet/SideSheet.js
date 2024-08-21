import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useRef, useId, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import 'dayjs';
import { useOnOutsideClick } from '../../hooks/useOnOutsideClick.js';
import '../../hooks/useScreenSize.js';
import { useHideBodyScroll } from '../../hooks/useHideBodyScroll.js';
import 'react-hook-form';
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper/AnimatePresenceWrapper.js';
import { Button } from '../Button/Button.js';
import { Text } from '../Text/Text.js';
import { useDispatchEventOnScroll } from '../../hooks/useDispatchEventOnScroll.js';
import { Footer } from './Footer/Footer.js';
import { IconCaretUp } from '../SVGIcons/IconCaretUp.js';
import { IconDismissFilled } from '../SVGIcons/IconDismissFilled.js';
import '../../typeof-3b51e673.js';
import '../../consts/index.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import 'react-syntax-highlighter';
import '../Button/consts.js';
import '../../utils/helpers.js';
import '../Checkbox/Checkbox.js';
import '../Popover/Popover.js';
import '../../hooks/useGetTooltipStyles.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../Tooltip/types.js';
import '../../hooks/useHideOnScroll.js';
import '../Link/Link.js';
import '../SVGIcons/IconInfo.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SideSheet = function SideSheet(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 'small' : _props$size,
    isLoading = props.isLoading,
    isOpen = props.isOpen,
    onClose = props.onClose,
    onSubmit = props.onSubmit,
    title = props.title,
    _props$position = props.position,
    position = _props$position === void 0 ? 'right' : _props$position,
    shouldRemoveCallback = props.shouldRemoveCallback,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    headerButtons = props.headerButtons,
    footerButtons = props.footerButtons,
    scrollToTopOptions = props.scrollToTopOptions,
    children = props.children,
    _props$closeOnOutside = props.closeOnOutsideClick,
    closeOnOutsideClick = _props$closeOnOutside === void 0 ? true : _props$closeOnOutside,
    checkboxInfo = props.checkboxInfo;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    containerRef = _useState2[0],
    setContainerRef = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShownScrollIcon = _useState4[0],
    setIsShownScrollIcon = _useState4[1];
  var scrollbarContainerRef = useRef(null);
  useOnOutsideClick(containerRef, onClose, isOpen && closeOnOutsideClick, useId(), shouldRemoveCallback);
  useHideBodyScroll(isOpen);
  var dispatchScrollEvent = useDispatchEventOnScroll();
  useEffect(function () {
    if (isOpen && scrollToTopOptions) {
      var _scrollbarContainerRe;
      var handleOnScroll = function handleOnScroll(e) {
        dispatchScrollEvent();
        if (isOpen) {
          setIsShownScrollIcon(e.currentTarget.scrollTop > scrollToTopOptions.onPixel);
        }
      };
      (_scrollbarContainerRe = scrollbarContainerRef.current) === null || _scrollbarContainerRe === void 0 || _scrollbarContainerRe.addEventListener('scroll', handleOnScroll);
    }
    if (!isOpen) {
      handleScrollToTop();
    }
  }, [isOpen, scrollToTopOptions]);
  var handleScrollToTop = useCallback(function () {
    var _scrollbarContainerRe2;
    setIsShownScrollIcon(false);
    (_scrollbarContainerRe2 = scrollbarContainerRef.current) === null || _scrollbarContainerRe2 === void 0 || _scrollbarContainerRe2.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  var isFromLeft = position === 'left';
  return /*#__PURE__*/React.createElement(AnimatePresenceWrapper, null, isOpen ? /*#__PURE__*/React.createElement(motion.div, {
    className: "side-sheet",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
        delay: 0.3
      }
    },
    transition: {
      duration: 0.2
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: isFromLeft ? {
      left: '-100%'
    } : {
      right: '-100%'
    },
    animate: isFromLeft ? {
      left: 0
    } : {
      right: 0
    },
    exit: _objectSpread(_objectSpread({}, isFromLeft ? {
      left: '-100%'
    } : {
      right: '-100%'
    }), {}, {
      transition: {
        duration: 0.5
      }
    }),
    transition: {
      duration: 0.5
    },
    className: classNames('side-sheet__container', "side-sheet__".concat(position), "side-sheet__container--".concat(size), className),
    ref: setContainerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__header__left pr-16"
  }, headerButtons !== null && headerButtons !== void 0 && headerButtons.back ? /*#__PURE__*/React.createElement(Button, _extends({
    size: "small",
    type: "tertiary"
  }, headerButtons.back, {
    className: "mr-8"
  })) : null, /*#__PURE__*/React.createElement(Text, {
    className: "side-sheet__title",
    weight: "bolder",
    lineHeight: "large",
    size: "medium"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__header__right"
  }, headerButtons !== null && headerButtons !== void 0 && headerButtons.pin ? /*#__PURE__*/React.createElement(Button, _extends({
    size: "small",
    type: "tertiary"
  }, headerButtons.pin, {
    className: "mr-8"
  })) : null, headerButtons !== null && headerButtons !== void 0 && headerButtons.close ? /*#__PURE__*/React.createElement(Button, _extends({
    size: "small",
    type: "tertiary"
  }, headerButtons.close, {
    onClick: onClose
  })) : /*#__PURE__*/React.createElement(Button, {
    size: "small",
    type: "tertiary",
    iconProps: {
      Component: IconDismissFilled
    },
    onClick: onClose
  })), isShownScrollIcon && /*#__PURE__*/React.createElement(Button, {
    size: "large",
    type: "secondary",
    iconProps: {
      Component: IconCaretUp
    },
    className: "side-sheet__header__scroll-top side-sheet__header__scroll-top__".concat(size),
    onClick: handleScrollToTop
  })), /*#__PURE__*/React.createElement("div", {
    className: "side-sheet__content scrollbar scrollbar--vertical",
    ref: scrollbarContainerRef
  }, children), /*#__PURE__*/React.createElement(Footer, {
    footerButtons: footerButtons,
    isLoading: isLoading,
    onClose: onClose,
    onSubmit: onSubmit,
    checkboxInfo: checkboxInfo
  }))) : null);
};

export { SideSheet };
