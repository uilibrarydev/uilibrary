import React from 'react';
import classNames from 'classnames';
import { noop } from '../../utils/helpers.js';
import 'dayjs';

var Text = function Text(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'primary' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'standard' : _props$size,
    _props$weight = props.weight,
    weight = _props$weight === void 0 ? 'regular' : _props$weight,
    _props$lineHeight = props.lineHeight,
    lineHeight = _props$lineHeight === void 0 ? 'medium' : _props$lineHeight,
    _props$as = props.as,
    As = _props$as === void 0 ? 'p' : _props$as,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? noop : _props$onClick,
    _props$id = props.id,
    id = _props$id === void 0 ? '' : _props$id,
    title = props.title;
  return /*#__PURE__*/React.createElement(As, {
    id: id,
    title: title,
    "data-id": dataId,
    onClick: onClick,
    className: classNames('body', size && "body-".concat(size), type && "color-".concat(type), weight, lineHeight && "lh-".concat(lineHeight), className)
  }, children);
};

export { Text };
