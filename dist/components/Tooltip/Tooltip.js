import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Text } from '../Text/Text.js';
import { useGetTooltipStyles } from '../../hooks/useGetTooltipStyles.js';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import { Positions } from './types.js';
import '../../utils/helpers.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../../consts/index.js';

var Tooltip = function Tooltip(props) {
  var tooltipRef = useRef(null);
  var _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    text = props.text,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$position = props.position,
    position = _props$position === void 0 ? Positions.BOTTOM_LEFT : _props$position,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    id = props.id,
    elemRef = props.elemRef,
    _props$hovered = props.hovered,
    hovered = _props$hovered === void 0 ? false : _props$hovered;
  var _useState = useState(hovered),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var _useState3 = useState(elemRef || null),
    _useState4 = _slicedToArray(_useState3, 2),
    parent = _useState4[0],
    setElement = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    toolTipCurrentWidth = _useState6[0],
    setToolTipCurrentWidth = _useState6[1];
  useEffect(function () {
    if (id) {
      var element = document.getElementById(id.toString());
      setElement(element);
    }
  }, [id]);
  var onMouseEnter = function onMouseEnter() {
    setIsHovered(true);
  };
  var onMouseLeave = function onMouseLeave() {
    return setIsHovered(false);
  };
  useHideOnScroll(onMouseLeave);
  var _useGetTooltipStyles = useGetTooltipStyles({
      elemRef: parent,
      tooltipRef: tooltipRef.current,
      initialPosition: position,
      toolTipCurrentWidth: toolTipCurrentWidth
    }),
    tooltipStyles = _useGetTooltipStyles.tooltipStyles,
    tooltipPosition = _useGetTooltipStyles.tooltipPosition;
  useEffect(function () {
    if (parent) {
      parent.addEventListener('mouseenter', onMouseEnter);
      parent.addEventListener('mouseleave', onMouseLeave);
    }
    return function () {
      parent === null || parent === void 0 || parent.removeEventListener('mouseenter', onMouseEnter);
      parent === null || parent === void 0 || parent.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [parent]);
  useEffect(function () {
    if (isHovered) {
      var _tooltipRef$current;
      setToolTipCurrentWidth((tooltipRef === null || tooltipRef === void 0 || (_tooltipRef$current = tooltipRef.current) === null || _tooltipRef$current === void 0 ? void 0 : _tooltipRef$current.clientWidth) || 0);
    } else {
      setToolTipCurrentWidth(0);
    }
  }, [isHovered]);
  if (!isHovered) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: tooltipStyles,
    "data-id": dataId,
    className: classNames("tooltip tooltip--".concat(size, " tooltip--").concat(tooltipPosition), className),
    ref: tooltipRef
  }, /*#__PURE__*/React.createElement(Text, {
    dataId: "".concat(dataId, "-text"),
    className: "tooltip__inner",
    type: "primary",
    weight: "regular",
    lineHeight: "small",
    size: "".concat(size == 'small' ? 'xsmall' : 'small')
  }, text));
};

export { Tooltip };
