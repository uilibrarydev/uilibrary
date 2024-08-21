import React, { Suspense } from 'react';
import { IconComponentMapping } from './constants.js';

var IconDynamicComponent = function IconDynamicComponent(_ref) {
  var componentName = _ref.componentName,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'small' : _ref$size,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'inverse' : _ref$type,
    className = _ref.className;
  if (!componentName || !IconComponentMapping[componentName]) {
    return null;
  }

  // Dynamically load the component based on the componentName prop
  var Component = IconComponentMapping[componentName];
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Component, {
    type: type,
    size: size,
    className: className
  }));
};

export { IconDynamicComponent, IconDynamicComponent as default };
