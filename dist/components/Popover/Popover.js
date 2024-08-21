import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useId, useEffect } from 'react';
import classNames from 'classnames';
import { useGetTooltipStyles } from '../../hooks/useGetTooltipStyles.js';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import 'dayjs';
import { useOnOutsideClick } from '../../hooks/useOnOutsideClick.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import { Text } from '../Text/Text.js';
import { Link } from '../Link/Link.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../Tooltip/types.js';
import '../../consts/index.js';
import '../../utils/helpers.js';

var Popover = function Popover(props) {
  var dataId = props.dataId,
    text = props.text,
    linkAddons = props.linkAddons,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$position = props.position,
    position = _props$position === void 0 ? 'top-left' : _props$position,
    children = props.children,
    elemRef = props.elemRef,
    id = props.id,
    _props$clicked = props.clicked,
    clicked = _props$clicked === void 0 ? false : _props$clicked;
  var _useState = useState(clicked),
    _useState2 = _slicedToArray(_useState, 2),
    isClicked = _useState2[0],
    setIsClicked = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    popoverRef = _useState4[0],
    setPopoverRef = _useState4[1];
  var _useState5 = useState(elemRef || null),
    _useState6 = _slicedToArray(_useState5, 2),
    parent = _useState6[0],
    setElement = _useState6[1];
  var _useGetTooltipStyles = useGetTooltipStyles({
      elemRef: parent,
      tooltipRef: popoverRef,
      initialPosition: position
    }),
    popoverPosition = _useGetTooltipStyles.tooltipPosition,
    popoverStyles = _useGetTooltipStyles.tooltipStyles;
  var showMessage = function showMessage() {
    return setIsClicked(true);
  };
  var hideMessage = function hideMessage() {
    return setIsClicked(false);
  };
  useHideOnScroll(hideMessage);
  useOnOutsideClick(popoverRef, hideMessage, isClicked, useId());
  useEffect(function () {
    if (id) {
      var element = document.getElementById(id.toString());
      setElement(element);
    }
  }, [id]);
  useEffect(function () {
    if (parent) {
      parent.addEventListener('click', showMessage);
    }
  }, [parent]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isClicked && /*#__PURE__*/React.createElement("div", {
    "data-id": "".concat(dataId, "-content"),
    className: classNames("popover popover--".concat(popoverPosition), className),
    ref: setPopoverRef,
    style: popoverStyles
  }, /*#__PURE__*/React.createElement("div", {
    className: "popover__inner scrollbar scrollbar--vertical pr-8"
  }, linkAddons ? /*#__PURE__*/React.createElement(Link, {
    dataId: linkAddons.dataId,
    url: linkAddons.url,
    beforeLink: linkAddons.beforeLink,
    afterLink: linkAddons.afterLink,
    target: linkAddons.target,
    className: 'popover__link'
  }, text) : /*#__PURE__*/React.createElement(Text, {
    dataId: "".concat(dataId, "-text"),
    type: "primary",
    weight: "regular",
    lineHeight: "medium",
    size: "small"
  }, text))), children);
};

export { Popover };
