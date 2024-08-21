import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React, { useContext } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import 'dayjs';
import { ErrorMessage as ErrorMessage$1 } from '../../helperComponents/ErrorMessage/ErrorMessage.js';
import { FormContext } from '../../context/types.js';
import '../../hooks/useScreenSize.js';
import { Controller } from 'react-hook-form';
import 'react-syntax-highlighter';
import '../../typeof-3b51e673.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormField = function FormField(props) {
  var As = props.As,
    name = props.name,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    _props$hideErrorMessa = props.hideErrorMessage,
    hideErrorMessage = _props$hideErrorMessa === void 0 ? false : _props$hideErrorMessa;
  var _useContext = useContext(FormContext),
    register = _useContext.register,
    errors = _useContext.errors,
    setValue = _useContext.setValue,
    control = _useContext.control;
  if (!register) {
    return null;
  }
  var registerOptions = register(name);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('form-container__field', className, name)
  }, /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    render: function render(_ref) {
      var field = _ref.field,
        fieldState = _ref.fieldState;
      return /*#__PURE__*/React.createElement(React.Fragment, null, As(_objectSpread(_objectSpread({
        hasError: !!fieldState.error,
        isValid: fieldState.isTouched && fieldState.isDirty && !fieldState.invalid,
        dataId: dataId
      }, registerOptions), {}, {
        setFieldValue: function setFieldValue(data, name, options) {
          return setValue(data, name, _objectSpread({
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
          }, options));
        }
      }, field)), !hideErrorMessage ? /*#__PURE__*/React.createElement(ErrorMessage, {
        name: name,
        errors: errors,
        render: function render(_ref2) {
          var message = _ref2.message;
          return /*#__PURE__*/React.createElement(ErrorMessage$1, {
            dataId: dataId,
            message: message || ''
          });
        }
      }) : null);
    }
  }));
};

export { FormField };
