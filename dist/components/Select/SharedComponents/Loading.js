import React from 'react';
import { Text } from '../../Text/Text.js';
import 'classnames';
import '../../../utils/helpers.js';
import 'dayjs';

var Loading = function Loading(props) {
  var _props$loadingText = props.loadingText,
    loadingText = _props$loadingText === void 0 ? 'Results loading ...' : _props$loadingText;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Text, null, loadingText));
};

export { Loading };
