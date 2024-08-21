import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowDownFilled = function IconArrowDownFilled(_ref) {
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
    id: "Direction=Down, Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M19.7159 13.7045C20.1036 13.3111 20.0989 12.678 19.7055 12.2903C19.3121 11.9027 18.6789 11.9074 18.2913 12.3008L13 17.6711V4C13 3.44771 12.5522 3 12 3C11.4477 3 11 3.44772 11 4V17.6646L5.71501 12.3008C5.32739 11.9074 4.69424 11.9027 4.30083 12.2903C3.90743 12.678 3.90274 13.3111 4.29036 13.7045L11.1127 20.6287C11.6024 21.1256 12.4039 21.1256 12.8936 20.6287L19.7159 13.7045Z",
    fill: "#222222"
  })));
};

export { IconArrowDownFilled, IconArrowDownFilled as default };
