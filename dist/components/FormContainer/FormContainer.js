import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { validateFieldsNatively, toNestError } from '@hookform/resolvers';
import classNames from 'classnames';
import { FormContext } from '../../context/types.js';
import { Button } from '../Button/Button.js';
import '../../utils/helpers.js';
import 'dayjs';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import '../../hooks/useScreenSize.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import 'react-syntax-highlighter';
import '../Button/consts.js';

var o=function(o,n,a){return void 0===n&&(n={}),void 0===a&&(a={}),function(s,i,c){try{return Promise.resolve(function(t,r){try{var u=(n.context&&"development"===process.env.NODE_ENV&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(o["sync"===a.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},n,{context:i}))).then(function(t){return c.shouldUseNativeValidation&&validateFieldsNatively({},c),{values:a.rawValues?s:t,errors:{}}}));}catch(e){return r(e)}return u&&u.then?u.then(void 0,r):u}(0,function(e){if(!e.inner)throw e;return {values:{},errors:toNestError((o=e,n=!c.shouldUseNativeValidation&&"all"===c.criteriaMode,(o.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),n){var o=e[t.path].types,a=o&&o[t.type];e[t.path]=appendErrors(t.path,n,e,t.type,a?[].concat(a,t.message):t.message);}return e},{})),c)};var o,n;}))}catch(e){return Promise.reject(e)}}};

var FormContainer = function FormContainer(props) {
  var children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    shouldUnregister = props.shouldUnregister,
    _props$shouldFocusErr = props.shouldFocusError,
    shouldFocusError = _props$shouldFocusErr === void 0 ? true : _props$shouldFocusErr,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'onBlur' : _props$mode,
    initialValues = props.initialValues,
    validationScheme = props.validationScheme,
    buttonConfigs = props.buttonConfigs,
    formId = props.formId,
    onSubmit = props.onSubmit;
  var _useForm = useForm({
      mode: mode,
      resolver: o(validationScheme),
      defaultValues: initialValues,
      shouldFocusError: shouldFocusError,
      shouldUnregister: shouldUnregister
    }),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    setValue = _useForm.setValue,
    control = _useForm.control,
    formState = _useForm.formState,
    getValues = _useForm.getValues,
    watch = _useForm.watch,
    reset = _useForm.reset,
    clearErrors = _useForm.clearErrors,
    setError = _useForm.setError,
    trigger = _useForm.trigger,
    getFieldState = _useForm.getFieldState,
    unregister = _useForm.unregister;
  var errors = formState.errors,
    isDirty = formState.isDirty,
    isSubmitted = formState.isSubmitted,
    isSubmitting = formState.isSubmitting,
    dirtyFields = formState.dirtyFields;
  var customSubmit = function customSubmit(data) {
    if (onSubmit) {
      onSubmit(data, formState, dirtyFields);
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(customSubmit),
    id: formId,
    className: classNames('form-container', className)
  }, /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: {
      trigger: trigger,
      register: register,
      errors: errors,
      control: control,
      setValue: setValue,
      getValues: getValues,
      watch: watch,
      reset: reset,
      isDirty: isDirty,
      isSubmitted: isSubmitted,
      isSubmitting: isSubmitting,
      clearErrors: clearErrors,
      setError: setError,
      dirtyFields: dirtyFields,
      getFieldState: getFieldState,
      unregister: unregister
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, children, buttonConfigs && /*#__PURE__*/React.createElement("div", {
    className: "form-container__buttons"
  }, buttonConfigs.map(function (buttonConfig, index) {
    return /*#__PURE__*/React.createElement(Button, _extends({}, buttonConfig, {
      key: index
    }));
  })))));
};

export { FormContainer };
