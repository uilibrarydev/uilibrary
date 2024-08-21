import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowResetFilled = function IconArrowResetFilled(_ref) {
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
    d: "M7.20711 2.54289C7.59763 2.93342 7.59763 3.56658 7.20711 3.95711L5.41421 5.75H13.25C17.6683 5.75 21.25 9.33172 21.25 13.75C21.25 18.1683 17.6683 21.75 13.25 21.75C8.83172 21.75 5.25 18.1683 5.25 13.75C5.25 13.1977 5.69772 12.75 6.25 12.75C6.80228 12.75 7.25 13.1977 7.25 13.75C7.25 17.0637 9.93629 19.75 13.25 19.75C16.5637 19.75 19.25 17.0637 19.25 13.75C19.25 10.4363 16.5637 7.75 13.25 7.75H5.41421L7.20711 9.54289C7.59763 9.93342 7.59763 10.5666 7.20711 10.9571C6.81658 11.3476 6.18342 11.3476 5.79289 10.9571L2.29289 7.45711C1.90237 7.06658 1.90237 6.43342 2.29289 6.04289L5.79289 2.54289C6.18342 2.15237 6.81658 2.15237 7.20711 2.54289Z",
    fill: "#222222"
  })));
};

export { IconArrowResetFilled, IconArrowResetFilled as default };
