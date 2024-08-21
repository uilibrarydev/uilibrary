import React from 'react';
import { Text } from '../../Text/Text.js';
import 'classnames';
import '../../../utils/helpers.js';
import 'dayjs';

var CardDescription = function CardDescription(props) {
  var description = props.description,
    disabled = props.disabled;
  return description ? /*#__PURE__*/React.createElement(Text, {
    type: disabled ? 'disabled' : 'secondary',
    size: 'small',
    className: 'mt-8'
  }, /*#__PURE__*/React.createElement(React.Fragment, null, description)) : null;
};

export { CardDescription };
