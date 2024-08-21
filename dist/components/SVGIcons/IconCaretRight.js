import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretRight = function IconCaretRight(_ref) {
  var size = _ref.size,
    type = _ref.type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    onClick = _ref.onClick,
    refHandler = _ref.refHandler,
    id = _ref.id,
    dataId = _ref.dataId;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: classNames('svg-icon', _defineProperty(_defineProperty(_defineProperty({}, "svg-icon__size-".concat(size), size), "svg-icon__type-".concat(type), type), className, className)),
    viewBox: "0 0 24 24",
    fill: "none",
    onClick: onClick,
    ref: refHandler,
    id: id,
    "data-id": dataId ? "".concat(dataId, "-svg-icon") : ''
  }, /*#__PURE__*/React.createElement("g", {
    id: "Direction=Right, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M11.9794 18.839C11.1711 19.5462 9.90625 18.9722 9.90625 17.8983L9.90625 6.10204C9.90625 5.02809 11.1712 4.45412 11.9794 5.16132L18.29 10.6831C19.0869 11.3804 19.0869 12.6199 18.29 13.3172L11.9794 18.839ZM11.4063 17.3473L17.3023 12.1883C17.4161 12.0887 17.4161 11.9116 17.3023 11.812L11.4062 6.65298L11.4063 17.3473Z",
    fill: "#222222"
  })));
};

export { IconCaretRight, IconCaretRight as default };
