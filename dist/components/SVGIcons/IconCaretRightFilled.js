import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretRightFilled = function IconCaretRightFilled(_ref) {
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
    id: "Direction=Right, Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M9.90625 17.8983C9.90625 18.9722 11.1711 19.5462 11.9794 18.839L18.29 13.3172C19.0869 12.6199 19.0869 11.3804 18.29 10.6831L11.9794 5.16132C11.1712 4.45412 9.90625 5.02809 9.90625 6.10204V17.8983Z",
    fill: "#222222"
  })));
};

export { IconCaretRightFilled, IconCaretRightFilled as default };
