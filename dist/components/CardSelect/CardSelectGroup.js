import React from 'react';
import { CardSelect } from './CardSelect.js';
import '../Text/Text.js';
import 'classnames';
import '../../utils/helpers.js';
import 'dayjs';
import './components/CardChips.js';
import '../../extends-a63feb99.js';
import '../Chips/Chips.js';
import '../Chips/types.js';
import '../SVGIcons/IconDismissCircleFilled.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import './components/CardInput.js';
import '../Input/Input.js';
import '../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'react-number-format';
import '../../helperComponents/Label/Label.js';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../hooks/useScreenSize.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../SVGIcons/IconCheckmarkCircleFilled.js';
import './components/CardDescription.js';
import './components/CardAdditionalInfo.js';
import '../Divider/Divider.js';
import '../Radio/Radio.js';
import '../Radio/RadioGroup.js';
import '../Image/Image.js';

var CardSelectGroup = function CardSelectGroup(props) {
  var cards = props.cards,
    name = props.name,
    handleChange = props.handleChange,
    value = props.value,
    cardsGroupType = props.cardsGroupType,
    cardsGroupDisable = props.cardsGroupDisable;
  return /*#__PURE__*/React.createElement("div", null, cards.map(function (_ref, index) {
    var type = _ref.type,
      illustration = _ref.illustration,
      cardValue = _ref.value,
      title = _ref.title,
      description = _ref.description,
      chips = _ref.chips,
      inputProps = _ref.inputProps,
      additionalInfo = _ref.additionalInfo,
      id = _ref.id,
      disabled = _ref.disabled;
    return /*#__PURE__*/React.createElement(CardSelect, {
      className: 'mb-20',
      name: name,
      key: id || index,
      type: cardsGroupType || type,
      title: title,
      description: description,
      chips: chips,
      inputProps: inputProps,
      handleChange: handleChange,
      additionalInfo: additionalInfo,
      cardValue: cardValue,
      value: value,
      illustration: illustration,
      disabled: cardsGroupDisable || disabled
    });
  }));
};

export { CardSelectGroup };
