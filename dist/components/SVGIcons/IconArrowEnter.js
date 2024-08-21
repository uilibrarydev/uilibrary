import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowEnter = function IconArrowEnter(_ref) {
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
    d: "M9.0002 20.4001C8.66883 20.4001 8.4002 20.1315 8.4002 19.8001C8.4002 19.4687 8.66883 19.2001 9.0002 19.2001H16.8002C18.1257 19.2001 19.2002 18.1256 19.2002 16.8001V7.2001C19.2002 5.87461 18.1257 4.8001 16.8002 4.8001H9.0002C8.66883 4.8001 8.4002 4.53147 8.4002 4.2001C8.4002 3.86873 8.66883 3.6001 9.0002 3.6001H16.8002C18.7884 3.6001 20.4002 5.21187 20.4002 7.2001V16.8001C20.4002 18.7883 18.7884 20.4001 16.8002 20.4001H9.0002ZM9.17593 7.37583C9.41025 7.14152 9.79014 7.14152 10.0245 7.37583L14.2245 11.5758C14.4588 11.8101 14.4588 12.19 14.2245 12.4244L10.0245 16.6244C9.79014 16.8587 9.41025 16.8587 9.17593 16.6244C8.94162 16.39 8.94162 16.0101 9.17593 15.7758L12.3517 12.6001H1.8002C1.46882 12.6001 1.2002 12.3315 1.2002 12.0001C1.2002 11.6687 1.46882 11.4001 1.8002 11.4001H12.3517L9.17593 8.22436C8.94162 7.99005 8.94162 7.61015 9.17593 7.37583Z",
    fill: "#222222"
  }));
};

export { IconArrowEnter, IconArrowEnter as default };
