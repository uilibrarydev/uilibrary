import React from 'react';
import { AnimatePresence } from 'framer-motion';

//  This component is for exit animation
function AnimatePresenceWrapper(_ref) {
  var children = _ref.children,
    _ref$initial = _ref.initial,
    initial = _ref$initial === void 0 ? true : _ref$initial;
  var NewAnimatePresence = AnimatePresence;
  return /*#__PURE__*/React.createElement(NewAnimatePresence, {
    initial: initial
  }, children);
}

export { AnimatePresenceWrapper };
