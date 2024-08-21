import React from 'react';
import { Text } from '../Text/Text.js';
import 'classnames';
import '../../utils/helpers.js';
import 'dayjs';

var Block = function Block(props) {
  var children = props.children,
    label = props.label,
    open = props.open;
  return /*#__PURE__*/React.createElement("div", {
    className: "side--navigation--block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side--navigation--block--label"
  }, open && /*#__PURE__*/React.createElement(Text, {
    size: "standard",
    type: "tertiary"
  }, label)), children);
};

export { Block };
