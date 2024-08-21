import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronDownFilled = function IconChevronDownFilled(_ref) {
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
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.40227 8.29289C4.79279 7.90237 5.42596 7.90237 5.81648 8.29289L12.1094 14.5858L18.4023 8.29289C18.7928 7.90237 19.426 7.90237 19.8165 8.29289C20.207 8.68342 20.207 9.31658 19.8165 9.70711L12.8165 16.7071C12.426 17.0976 11.7928 17.0976 11.4023 16.7071L4.40227 9.70711C4.01174 9.31658 4.01174 8.68342 4.40227 8.29289Z",
    fill: "#222222"
  }));
};

export { IconChevronDownFilled, IconChevronDownFilled as default };
