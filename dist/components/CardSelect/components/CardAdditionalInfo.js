import { Divider } from '../../Divider/Divider.js';
import { Text } from '../../Text/Text.js';
import React from 'react';
import 'classnames';
import '../../../utils/helpers.js';
import 'dayjs';

var CardAdditionalInfo = function CardAdditionalInfo(props) {
  var additionalInfo = props.additionalInfo,
    disabled = props.disabled;
  return additionalInfo !== null && additionalInfo !== void 0 && additionalInfo.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
    type: 'primary',
    isHorizontal: true,
    className: 'mt-16 mb-16'
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-select__list"
  }, additionalInfo.map(function (_ref) {
    var key = _ref.key,
      value = _ref.value,
      id = _ref.id;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      className: "card-select__list__item flexbox justify-content--between mt-12"
    }, /*#__PURE__*/React.createElement(Text, {
      type: disabled ? 'disabled' : 'secondary',
      size: 'small',
      className: 'pr-16'
    }, key), /*#__PURE__*/React.createElement(Text, {
      type: disabled ? 'disabled' : 'primary',
      weight: 'semibold'
    }, value));
  }))) : null;
};

export { CardAdditionalInfo };
