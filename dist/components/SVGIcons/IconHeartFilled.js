import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconHeartFilled = function IconHeartFilled(_ref) {
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
    d: "M12.8199 5.57961L11.9992 6.40211L11.1759 5.57886C9.07688 3.4798 5.67361 3.4798 3.57455 5.57886C1.47548 7.67793 1.47548 11.0812 3.57455 13.1803L11.4699 21.0756C11.7628 21.3685 12.2377 21.3685 12.5306 21.0756L20.432 13.1788C22.5264 11.0728 22.53 7.67906 20.4306 5.57961C18.3277 3.47672 14.9228 3.47672 12.8199 5.57961Z",
    fill: "#222222"
  })));
};

export { IconHeartFilled, IconHeartFilled as default };
