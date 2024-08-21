import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconSpinnerFilled = function IconSpinnerFilled(_ref) {
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
    id: "Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M12.0004 4.1999C7.69257 4.1999 4.20039 7.69208 4.20039 11.9999C4.20039 12.497 3.79745 12.8999 3.30039 12.8999C2.80333 12.8999 2.40039 12.497 2.40039 11.9999C2.40039 6.69797 6.69846 2.3999 12.0004 2.3999C17.3023 2.3999 21.6004 6.69797 21.6004 11.9999C21.6004 17.3018 17.3023 21.5999 12.0004 21.5999C11.5033 21.5999 11.1004 21.197 11.1004 20.6999C11.1004 20.2028 11.5033 19.7999 12.0004 19.7999C16.3082 19.7999 19.8004 16.3077 19.8004 11.9999C19.8004 7.69208 16.3082 4.1999 12.0004 4.1999Z",
    fill: "#222222"
  })));
};

export { IconSpinnerFilled, IconSpinnerFilled as default };
