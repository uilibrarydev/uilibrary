import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState } from 'react';
import { Text } from '../Text/Text.js';
import { Button } from '../Button/Button.js';
import classNames from 'classnames';
import '../../utils/helpers.js';
import 'dayjs';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import '../../hooks/useScreenSize.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../Button/consts.js';

var More = function More(props) {
  var _props$textProps = props.textProps,
    textProps = _props$textProps === void 0 ? {} : _props$textProps,
    expandedText = props.expandedText,
    collapsedText = props.collapsedText,
    _props$buttonText = props.buttonText,
    buttonText = _props$buttonText === void 0 ? {
      expand: 'Ավելին',
      collapse: 'Փակել'
    } : _props$buttonText;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var expand = function expand(e) {
    e.stopPropagation();
    setIsExpanded(true);
  };
  var collapse = function collapse(e) {
    e.stopPropagation();
    setIsExpanded(false);
  };
  return /*#__PURE__*/React.createElement(Text, _extends({}, textProps, {
    className: "info_with_more_button"
  }), "".concat(isExpanded ? expandedText : collapsedText), /*#__PURE__*/React.createElement(Button, {
    className: classNames('more-button', {
      'ml-8': !!collapsedText || isExpanded
    }),
    type: "text",
    buttonText: isExpanded ? buttonText.collapse : buttonText.expand,
    onClick: isExpanded ? collapse : expand
  }));
};

export { More };
