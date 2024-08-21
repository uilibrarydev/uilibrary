import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowImport = function IconArrowImport(_ref) {
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
    d: "M21.2503 4.5C21.63 4.5 21.9438 4.78215 21.9934 5.14823L22.0003 5.25V18.2541C22.0003 18.6683 21.6645 19.0041 21.2503 19.0041C20.8706 19.0041 20.5568 18.7219 20.5071 18.3558L20.5003 18.2541V5.25C20.5003 4.83579 20.8361 4.5 21.2503 4.5ZM12.6474 6.30373L12.72 6.21961C12.9863 5.95338 13.403 5.92921 13.6966 6.1471L13.7807 6.21972L18.7773 11.2174C19.0434 11.4835 19.0677 11.8999 18.8501 12.1935L18.7776 12.2776L13.781 17.2811C13.4883 17.5742 13.0134 17.5745 12.7203 17.2818C12.4539 17.0157 12.4294 16.5991 12.647 16.3053L12.7196 16.2211L16.4305 12.504L2.75049 12.5049C2.37079 12.5049 2.057 12.2228 2.00733 11.8567L2.00049 11.7549C2.00049 11.3752 2.28264 11.0615 2.64872 11.0118L2.75049 11.0049L16.4435 11.004L12.7199 7.28028C12.4537 7.01398 12.4295 6.59732 12.6474 6.30373L12.72 6.21961L12.6474 6.30373Z",
    fill: "#222222"
  })));
};

export { IconArrowImport, IconArrowImport as default };
