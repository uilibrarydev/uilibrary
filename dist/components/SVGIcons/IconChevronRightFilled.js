import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronRightFilled = function IconChevronRightFilled(_ref) {
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
    d: "M8.40227 4.29289C8.01174 4.68342 8.01174 5.31658 8.40227 5.70711L14.6952 12L8.40227 18.2929C8.01174 18.6834 8.01174 19.3166 8.40227 19.7071C8.79279 20.0976 9.42596 20.0976 9.81648 19.7071L16.8165 12.7071C17.207 12.3166 17.207 11.6834 16.8165 11.2929L9.81648 4.29289C9.42596 3.90237 8.79279 3.90237 8.40227 4.29289Z",
    fill: "#222222"
  }));
};

export { IconChevronRightFilled, IconChevronRightFilled as default };
