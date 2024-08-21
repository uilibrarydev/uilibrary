import React, { forwardRef } from 'react';
import { Radio } from './Radio.js';
import { Label } from '../../helperComponents/Label/Label.js';
import classNames from 'classnames';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var RadioGroup = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$isHorizontal = props.isHorizontal,
    isHorizontal = _props$isHorizontal === void 0 ? false : _props$isHorizontal,
    name = props.name,
    options = props.options,
    setFieldValue = props.setFieldValue,
    value = props.value,
    handleChange = props.handleChange,
    label = props.label,
    required = props.required,
    disabled = props.disabled,
    className = props.className,
    labelAddons = props.labelAddons,
    hasError = props.hasError,
    selected = props.selected;
  var onSelect = function onSelect(selected) {
    if (name && setFieldValue) {
      setFieldValue(name, selected, {
        shouldValidate: true
      });
    }
    if (handleChange) {
      handleChange(selected);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('radio-group', {
      'radio-group--horizontal': isHorizontal,
      'radio-group--vertical': !isHorizontal
    }, className)
  }, /*#__PURE__*/React.createElement(Label, {
    className: "radio-group__label",
    text: label,
    invalid: hasError,
    required: required,
    disabled: disabled,
    labelAddons: labelAddons
  }), /*#__PURE__*/React.createElement("div", {
    className: "radio-group__inner"
  }, options.map(function (radioOption) {
    return /*#__PURE__*/React.createElement(Radio, {
      label: radioOption.label,
      helperText: radioOption.helperText,
      key: radioOption.value,
      name: name,
      disabled: disabled,
      className: "radio-group__item",
      isSelected: radioOption.value === value || radioOption.value === selected,
      onClick: function onClick() {
        return onSelect(radioOption.value);
      },
      dataId: radioOption.dataId
    });
  })));
});
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
