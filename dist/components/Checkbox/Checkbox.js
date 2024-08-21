import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import { _ as _extends } from '../../extends-a63feb99.js';
import React, { useRef, useMemo } from 'react';
import classNames from 'classnames';
import { Popover } from '../Popover/Popover.js';
import { Link } from '../Link/Link.js';
import { Text } from '../Text/Text.js';
import { IconInfo } from '../SVGIcons/IconInfo.js';
import { IconDynamicComponent } from '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../../typeof-3b51e673.js';
import '../../slicedToArray-c937067d.js';
import '../../hooks/useGetTooltipStyles.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../Tooltip/types.js';
import '../../hooks/useHideOnScroll.js';
import '../../consts/index.js';
import '../../hooks/useOnOutsideClick.js';
import '../../utils/helpers.js';
import '../../helperComponents/IconDynamicComponent/constants.js';

var Checkbox = function Checkbox(props, ref) {
  var label = props.label,
    disabled = props.disabled,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    link = props.link,
    name = props.name,
    setFieldValue = props.setFieldValue,
    selectedValue = props.selectedValue,
    value = props.value,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$iconProps = props.iconProps,
    iconProps = _props$iconProps === void 0 ? {
      name: 'checkmark'
    } : _props$iconProps,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    onClick = props.onClick,
    beforeLink = props.beforeLink,
    afterLink = props.afterLink,
    _props$helperText = props.helperText,
    helperText = _props$helperText === void 0 ? '' : _props$helperText,
    popoverAddons = props.popoverAddons,
    isInvalid = props.isInvalid;
  var localRef = useRef(null);
  var inputRef = ref && Object.keys(ref).length ? ref : localRef;
  var isChecked = !!value || selectedValue;
  var changeHandler = function changeHandler() {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, {
        shouldValidate: !isChecked
      });
    }
    if (onClick) {
      onClick(!isChecked);
    }
  };
  var checkboxLabelPopover = popoverAddons ? /*#__PURE__*/React.createElement(Popover, _extends({
    id: "".concat(popoverAddons.id)
  }, popoverAddons), /*#__PURE__*/React.createElement("div", {
    id: "".concat(popoverAddons.id)
  }, /*#__PURE__*/React.createElement(IconInfo, {
    dataId: "".concat(dataId, "-icon"),
    type: "information",
    size: "xsmall",
    className: 'ml-4 pointer',
    onClick: function onClick(e) {
      e.stopPropagation();
      changeHandler();
    }
  }))) : null;
  var checkboxLabel = useMemo(function () {
    if (!label) {
      return null;
    }
    if (typeof label !== 'string') {
      return label;
    }
    if (!link) {
      return /*#__PURE__*/React.createElement(Text, {
        type: disabled ? 'disabled' : 'primary',
        className: "controller__label"
      }, /*#__PURE__*/React.createElement(React.Fragment, null, label, required && /*#__PURE__*/React.createElement("sup", null, "*")));
    }
    return /*#__PURE__*/React.createElement(Text, {
      type: disabled ? 'disabled' : 'primary',
      className: "controller__label"
    }, /*#__PURE__*/React.createElement(React.Fragment, null, beforeLink && /*#__PURE__*/React.createElement("span", {
      className: "mr-4"
    }, beforeLink), /*#__PURE__*/React.createElement(Link, {
      dataId: dataId,
      url: link,
      target: "_blank"
    }, label), afterLink && /*#__PURE__*/React.createElement("span", {
      className: "ml-4"
    }, afterLink), required && /*#__PURE__*/React.createElement("sup", null, "*")));
  }, [label, link]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: classNames('controller', _defineProperty({
      'controller--checkbox': true,
      'controller--disabled': disabled,
      'controller--error': isInvalid
    }, className, !!className))
  }, /*#__PURE__*/React.createElement("input", {
    "data-id": dataId,
    type: "checkbox",
    ref: inputRef,
    tabIndex: 0,
    onChange: changeHandler,
    checked: Boolean(isChecked),
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "controller__icon"
  }, /*#__PURE__*/React.createElement(IconDynamicComponent, {
    componentName: iconProps.name,
    size: "xxsmall",
    type: disabled ? 'disabled' : 'inverse',
    className: "controller__mark"
  })), checkboxLabel ? /*#__PURE__*/React.createElement("div", {
    className: "controller__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexbox"
  }, checkboxLabel, checkboxLabelPopover), helperText ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: disabled ? 'disabled' : 'secondary'
  }, helperText) : null) : null));
};

export { Checkbox };
