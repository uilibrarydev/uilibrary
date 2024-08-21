import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCheckmarkFilled = function IconCheckmarkFilled(_ref) {
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
    d: "M8.98438 16.5858L5.19148 12.7929C4.80096 12.4024 4.16779 12.4024 3.77727 12.7929C3.38674 13.1834 3.38674 13.8166 3.77727 14.2071L8.27727 18.7071C8.66779 19.0976 9.30096 19.0976 9.69148 18.7071L20.6915 7.70711C21.082 7.31658 21.082 6.68342 20.6915 6.29289C20.301 5.90237 19.6678 5.90237 19.2773 6.29289L8.98438 16.5858Z",
    fill: "#222222"
  }));
};

export { IconCheckmarkFilled, IconCheckmarkFilled as default };
