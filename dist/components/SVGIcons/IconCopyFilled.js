import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCopyFilled = function IconCopyFilled(_ref) {
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
    d: "M6.17468 4.62704L6.17188 6.75V17.2542C6.17188 19.0491 7.62695 20.5042 9.42188 20.5042L18.0382 20.5045C17.7292 21.3782 16.8959 22.0042 15.9163 22.0042H9.42188C6.79852 22.0042 4.67188 19.8776 4.67188 17.2542V6.75C4.67188 5.76929 5.29932 4.93512 6.17468 4.62704ZM18.4219 2C19.6645 2 20.6719 3.00736 20.6719 4.25V17.25C20.6719 18.4926 19.6645 19.5 18.4219 19.5H9.42188C8.17923 19.5 7.17188 18.4926 7.17188 17.25V4.25C7.17188 3.00736 8.17923 2 9.42188 2H18.4219Z",
    fill: "#222222"
  }));
};

export { IconCopyFilled, IconCopyFilled as default };
