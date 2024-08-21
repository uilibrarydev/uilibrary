import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowDownload = function IconArrowDownload(_ref) {
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
    id: "Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M18.2498 20.4999C18.664 20.4998 19 20.8355 19 21.2497C19 21.6639 18.6644 21.9998 18.2502 21.9999L5.25022 22.0037C4.836 22.0038 4.5 21.6681 4.5 21.2539C4.5 20.8397 4.83557 20.5038 5.24978 20.5037L18.2498 20.4999ZM11.6482 2.01173L11.75 2.00488C12.1297 2.00488 12.4435 2.28704 12.4932 2.65311L12.5 2.75488L12.499 16.4399L16.2208 12.7196C16.4871 12.4533 16.9038 12.4291 17.1974 12.647L17.2815 12.7197C17.5477 12.986 17.5719 13.4026 17.354 13.6962L17.2814 13.7803L12.2837 18.7769C12.0176 19.043 11.6012 19.0673 11.3076 18.8498L11.2235 18.7772L6.22003 13.7806C5.92694 13.4879 5.92661 13.0131 6.21931 12.72C6.48539 12.4535 6.90204 12.429 7.1958 12.6467L7.27997 12.7192L10.999 16.4329L11 2.75488C11 2.37519 11.2822 2.06139 11.6482 2.01173L11.75 2.00488L11.6482 2.01173Z",
    fill: "#222222"
  })));
};

export { IconArrowDownload, IconArrowDownload as default };
