import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowUpFilled = function IconArrowUpFilled(_ref) {
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
    id: "Direction=Up, Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M4.28401 10.2954C3.89639 10.6888 3.90108 11.322 4.29449 11.7096C4.68789 12.0972 5.32104 12.0925 5.70866 11.6991L11 6.32882V19.9999C11 20.5522 11.4477 20.9999 12 20.9999C12.5523 20.9999 13 20.5522 13 19.9999V6.3353L18.2849 11.6991C18.6726 12.0925 19.3057 12.0972 19.6991 11.7096C20.0925 11.322 20.0972 10.6888 19.7096 10.2954L12.8872 3.37122C12.3976 2.87431 11.596 2.87431 11.1064 3.37122L4.28401 10.2954Z",
    fill: "#222222"
  })));
};

export { IconArrowUpFilled, IconArrowUpFilled as default };
