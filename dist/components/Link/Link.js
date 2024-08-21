import React from 'react';
import classNames from 'classnames';

var Link = function Link(props) {
  var children = props.children,
    afterLink = props.afterLink,
    beforeLink = props.beforeLink,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    url = props.url,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    target = props.target;
  return beforeLink || afterLink ? /*#__PURE__*/React.createElement("span", {
    className: className
  }, beforeLink, /*#__PURE__*/React.createElement("a", {
    href: url,
    className: classNames('link', {
      'ml-4': beforeLink,
      'mr-4': afterLink
    }),
    "data-id": "".concat(dataId, "-link"),
    target: target
  }, children), afterLink) : /*#__PURE__*/React.createElement("a", {
    href: url,
    className: classNames("link ".concat(className)),
    "data-id": "".concat(dataId, "-link"),
    target: target
  }, children);
};

export { Link };
