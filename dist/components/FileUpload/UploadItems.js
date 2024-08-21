import React from 'react';
import { Text } from '../Text/Text.js';
import { useFormProps } from '../../hooks/useFormProps.js';
import { openFileInNewWindow } from '../../utils/helpers.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import { ErrorMessage } from '../../helperComponents/ErrorMessage/ErrorMessage.js';
import 'classnames';
import { Button } from '../Button/Button.js';
import 'react-syntax-highlighter';
import { IconDelete } from '../SVGIcons/IconDelete.js';
import 'dayjs';
import '../../context/types.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../extends-a63feb99.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import '../Button/consts.js';

var UploadItems = function UploadItems(props) {
  var files = props.files,
    onRemove = props.onRemove,
    withFilePreview = props.withFilePreview,
    handleFileClick = props.handleFileClick;
  var _useFormProps = useFormProps(),
    errors = _useFormProps.errors;
  var filesErrors = errors && errors.files && errors.files.length > 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, files.map(function (file, index) {
    var _errors$files$index, _errors$files$index2;
    return /*#__PURE__*/React.createElement("div", {
      className: "upload-item mt-4 ".concat(filesErrors && (_errors$files$index = errors.files[index]) !== null && _errors$files$index !== void 0 && _errors$files$index.message ? 'upload-item--error' : ''),
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "upload-item__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "upload-item__content mb-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "upload-item__content__inner pr-8"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "small",
      lineHeight: "medium",
      className: "upload-item__text",
      onClick: function onClick(e) {
        return withFilePreview && openFileInNewWindow({
          e: e,
          file: file,
          handleFileClick: handleFileClick
        });
      }
    }, file.name), filesErrors && /*#__PURE__*/React.createElement(ErrorMessage, {
      message: (_errors$files$index2 = errors.files[index]) === null || _errors$files$index2 === void 0 ? void 0 : _errors$files$index2.message
    })), /*#__PURE__*/React.createElement(Button, {
      type: "tertiary",
      size: "small",
      iconProps: {
        Component: IconDelete
      },
      onClick: function onClick() {
        onRemove(file, index);
      }
    }))));
  }));
};

export { UploadItems };
