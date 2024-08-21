import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconAddCircleFilled = function IconAddCircleFilled(_ref) {
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
    d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7C11.6203 7 11.3065 7.28215 11.2568 7.64823L11.25 7.75V11.25H7.75C7.33579 11.25 7 11.5858 7 12C7 12.3797 7.28215 12.6935 7.64823 12.7432L7.75 12.75H11.25V16.25C11.25 16.6642 11.5858 17 12 17C12.3797 17 12.6935 16.7178 12.7432 16.3518L12.75 16.25V12.75H16.25C16.6642 12.75 17 12.4142 17 12C17 11.6203 16.7178 11.3065 16.3518 11.2568L16.25 11.25H12.75V7.75C12.75 7.33579 12.4142 7 12 7Z",
    fill: "#222222"
  })));
};

export { IconAddCircleFilled, IconAddCircleFilled as default };
