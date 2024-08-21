import React from 'react';
import { Text } from '../Text/Text.js';
import classNames from 'classnames';
import { CardChips } from './components/CardChips.js';
import { CardInput } from './components/CardInput.js';
import { CardDescription } from './components/CardDescription.js';
import { CardAdditionalInfo } from './components/CardAdditionalInfo.js';
import { CARD_SELECT_TYPES } from '../../consts/index.js';
import { Radio } from '../Radio/Radio.js';
import '../Radio/RadioGroup.js';
import { Image } from '../Image/Image.js';
import '../../utils/helpers.js';
import 'dayjs';
import '../../extends-a63feb99.js';
import '../Chips/Chips.js';
import '../Chips/types.js';
import '../SVGIcons/IconDismissCircleFilled.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
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
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../SVGIcons/IconCheckmarkCircleFilled.js';
import '../Divider/Divider.js';

var CardSelect = function CardSelect(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? CARD_SELECT_TYPES.cardRadio : _props$type,
    title = props.title,
    description = props.description,
    inputProps = props.inputProps,
    _props$chips = props.chips,
    chips = _props$chips === void 0 ? [] : _props$chips,
    disabled = props.disabled,
    className = props.className,
    additionalInfo = props.additionalInfo,
    handleChange = props.handleChange,
    name = props.name,
    setFieldValue = props.setFieldValue,
    value = props.value,
    cardValue = props.cardValue,
    illustration = props.illustration;
  var selected = cardValue === value;
  var cardSelectStyle = classNames("card-select ".concat(disabled ? 'card-select--disabled' : selected ? 'card-select--selected' : ''), className);
  var handleCardSelectValue = function handleCardSelectValue(selected) {
    if (name && setFieldValue) {
      setFieldValue(name, selected, {
        shouldValidate: true
      });
    }
    handleChange === null || handleChange === void 0 || handleChange(selected);
  };
  var handleCardSelect = function handleCardSelect() {
    if (cardValue) {
      handleCardSelectValue(cardValue);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cardSelectStyle,
    onClick: handleCardSelect
  }, illustration ? /*#__PURE__*/React.createElement("div", {
    className: 'card-select__image mr-8'
  }, /*#__PURE__*/React.createElement(Image, {
    imagePath: illustration
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: 'card-select__content'
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexbox justify-content--between align-items--start"
  }, /*#__PURE__*/React.createElement(Text, {
    type: disabled ? 'disabled' : 'primary',
    size: 'medium',
    weight: 'bold'
  }, /*#__PURE__*/React.createElement(React.Fragment, null, title)), type === CARD_SELECT_TYPES.cardRadio ? /*#__PURE__*/React.createElement(Radio, {
    name: name,
    isSelected: selected,
    disabled: disabled,
    className: 'ml-16'
  }) : null), /*#__PURE__*/React.createElement(CardChips, {
    chips: chips,
    disabled: disabled
  }), /*#__PURE__*/React.createElement(CardInput, {
    inputProps: inputProps,
    disabled: disabled
  }), /*#__PURE__*/React.createElement(CardDescription, {
    description: description,
    disabled: disabled
  }), /*#__PURE__*/React.createElement(CardAdditionalInfo, {
    additionalInfo: additionalInfo,
    disabled: disabled
  })));
};

export { CardSelect };
