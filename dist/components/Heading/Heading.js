import React from 'react';
import { noop } from '../../utils/helpers.js';
import classNames from 'classnames';
import 'dayjs';

var Heading = function Heading(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'small' : _props$size,
    _props$lineHeight = props.lineHeight,
    lineHeight = _props$lineHeight === void 0 ? 'large' : _props$lineHeight,
    _props$type = props.type,
    As = _props$type === void 0 ? 'h1' : _props$type,
    _props$weight = props.weight,
    weight = _props$weight === void 0 ? 'regular' : _props$weight,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? noop : _props$onClick,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId;
  return /*#__PURE__*/React.createElement(As, {
    dataid: dataId,
    onClick: onClick,
    className: classNames('heading', size && "heading-".concat(size), weight, lineHeight && "lh-".concat(lineHeight), className)
  }, children);
};

export { Heading };
