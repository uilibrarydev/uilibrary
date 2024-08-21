import { _ as _extends } from '../../../extends-a63feb99.js';
import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../Text/Text.js';
import { IconChevronRight } from '../../SVGIcons/IconChevronRight.js';
import { Divider } from '../../Divider/Divider.js';
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper/AnimatePresenceWrapper.js';
import classNames from 'classnames';
import { IconChevronDown } from '../../SVGIcons/IconChevronDown.js';
import '../../../utils/helpers.js';
import 'dayjs';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';

var CollapseItem = function CollapseItem(props) {
  var _props$title = props.title,
    text = _props$title.text,
    _props$title$size = _props$title.size,
    size = _props$title$size === void 0 ? 'medium' : _props$title$size,
    color = _props$title.color,
    className = props.className,
    isOpen = props.isOpen,
    toggle = props.toggle,
    dataId = props.dataId,
    children = props.children,
    _props$reverse = props.reverse,
    reverse = _props$reverse === void 0 ? false : _props$reverse,
    additionalInfo = props.additionalInfo,
    labelLeftIconProps = props.labelLeftIconProps,
    id = props.id;
  var title = typeof text === 'string' ? /*#__PURE__*/React.createElement(Text, {
    size: size,
    type: color,
    weight: "bolder",
    dataId: dataId
  }, text) : text;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('collapse', {
      'collapse--opened': isOpen
    }, className),
    id: "".concat(id || '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "collapse__header flexbox justify-content--between",
    onClick: toggle
  }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "collapse__header__inner flexbox align-items--center"
  }, /*#__PURE__*/React.createElement(IconChevronDown, {
    className: 'collapse__header__icon',
    size: 'small'
  }), additionalInfo), title) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flexbox align-items--center"
  }, labelLeftIconProps !== null && labelLeftIconProps !== void 0 && labelLeftIconProps.Component ? /*#__PURE__*/React.createElement(labelLeftIconProps.Component, _extends({
    size: "small",
    type: "primary",
    className: "mr-16"
  }, labelLeftIconProps)) : null, title), /*#__PURE__*/React.createElement("div", {
    className: "collapse__header__inner flexbox align-items--center"
  }, additionalInfo, /*#__PURE__*/React.createElement(IconChevronRight, {
    className: 'collapse__header__icon',
    size: 'small'
  })))), /*#__PURE__*/React.createElement(AnimatePresenceWrapper, {
    initial: false
  }, isOpen && /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      height: 0
    },
    animate: {
      height: 'auto'
    },
    exit: {
      height: 0
    },
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "collapse__content"
  }, /*#__PURE__*/React.createElement(Divider, {
    type: "primary",
    isHorizontal: true,
    className: 'collapse__divider'
  }), children))));
};

export { CollapseItem };
