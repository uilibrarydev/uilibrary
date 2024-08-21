import { _ as _toConsumableArray } from '../../toConsumableArray-0b5aa713.js';
import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useRef, useState, useCallback } from 'react';
import { FileUploadMode } from './types.js';
import { Button } from '../Button/Button.js';
import { Label } from '../../helperComponents/Label/Label.js';
import 'classnames';
import { uniqueFiles, checkIsAllowedFileSize, checkIsAllowedTypes, getFormattedValues } from '../../utils/helpers.js';
import { FILE_UPLOAD_ERRORS } from '../../consts/index.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import { UploadItems } from './UploadItems.js';
import { IconEditFilled } from '../SVGIcons/IconEditFilled.js';
import { IconEdit } from '../SVGIcons/IconEdit.js';
import { IconAttach } from '../SVGIcons/IconAttach.js';
import '../../extends-a63feb99.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import 'dayjs';
import '../../helperComponents/Loader/Loader.js';
import '../Button/consts.js';
import '../Text/Text.js';
import '../../hooks/useFormProps.js';
import '../../context/types.js';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../SVGIcons/IconDelete.js';

var FileUpload = function FileUpload(props) {
  var _props$allowedTypes = props.allowedTypes,
    allowedTypes = _props$allowedTypes === void 0 ? 'application/pdf, .png, .jpg, .jpeg, image/jpeg, image/png, image/jpg, text/plain, image/*, .pdf, .doc, .docx, application/vnd' : _props$allowedTypes,
    label = props.label,
    getFiles = props.getFiles,
    removeFiles = props.removeFiles,
    handleFileClick = props.handleFileClick,
    name = props.name,
    setFieldValue = props.setFieldValue,
    toBase64 = props.toBase64,
    required = props.required,
    disabled = props.disabled,
    buttonText = props.buttonText,
    _props$withFilePrevie = props.withFilePreview,
    withFilePreview = _props$withFilePrevie === void 0 ? true : _props$withFilePrevie,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? true : _props$multiple,
    uploadedFiles = props.uploadedFiles,
    value = props.value,
    labelAddons = props.labelAddons,
    onError = props.onError,
    fileAllowedSize = props.fileAllowedSize,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? FileUploadMode.attach : _props$mode;
  var files = value || uploadedFiles || [];
  var fileInputRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setHoverState = _useState2[1];
  var onMouseEnterOrLeave = function onMouseEnterOrLeave() {
    return setHoverState(!isHovered);
  };
  var onUploadClick = function onUploadClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  var updateInForm = useCallback(function (values) {
    if (name && setFieldValue) {
      setFieldValue(name, values);
    }
  }, [name, setFieldValue]);
  var setFiles = function setFiles(selectedFiles) {
    var allowedFilesBySize = selectedFiles.filter(function (file) {
      return !(fileAllowedSize && !checkIsAllowedFileSize(fileAllowedSize, file.size));
    });
    var allowedFilesByExtension = selectedFiles.filter(function (file) {
      return !(allowedTypes && !checkIsAllowedTypes(allowedTypes, file.type));
    });
    if (allowedFilesByExtension.length !== selectedFiles.length) {
      onError && onError(FILE_UPLOAD_ERRORS.type);
      return;
    }
    if (allowedFilesBySize.length !== selectedFiles.length) {
      onError && onError(FILE_UPLOAD_ERRORS.size);
      return;
    }
    updateInForm(selectedFiles);
    if (getFiles) {
      if (toBase64) {
        getFormattedValues(selectedFiles);
      } else {
        getFiles(selectedFiles);
      }
    }
  };
  var handleChange = useCallback(function (event) {
    var _event$target;
    var fileList = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files;
    var fileArray = multiple ? Array.from(fileList) : [fileList[0]];
    if (fileArray) {
      var updatedFiles = uniqueFiles(multiple ? [].concat(_toConsumableArray(fileArray), _toConsumableArray(files)) : fileArray);
      setFiles(updatedFiles);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [files, multiple]);
  var handleFileRemove = useCallback(function (file, index) {
    if (files) {
      var filteredFiles = files.filter(function (_, i) {
        return i !== index;
      });
      updateInForm(filteredFiles);
      if (removeFiles) {
        removeFiles(file);
      }
    }
  }, [files, removeFiles]);
  return /*#__PURE__*/React.createElement("div", {
    className: "file-upload"
  }, /*#__PURE__*/React.createElement(Label, {
    text: label,
    required: required,
    disabled: disabled,
    labelAddons: labelAddons
  }), /*#__PURE__*/React.createElement("div", {
    className: "file-upload__inner"
  }, /*#__PURE__*/React.createElement("input", {
    name: name,
    type: "file",
    multiple: multiple,
    className: "hide",
    ref: fileInputRef,
    accept: allowedTypes,
    onChange: handleChange
  }), mode === FileUploadMode.edit && /*#__PURE__*/React.createElement("div", {
    className: "edit__icon",
    onMouseEnter: onMouseEnterOrLeave,
    onMouseLeave: onMouseEnterOrLeave,
    onClick: onUploadClick
  }, isHovered ? /*#__PURE__*/React.createElement(IconEditFilled, {
    size: "xxsmall",
    type: "secondary"
  }) : /*#__PURE__*/React.createElement(IconEdit, {
    size: "xxsmall",
    type: "secondary"
  })), mode === FileUploadMode.attach && /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    size: "medium",
    disabled: disabled,
    iconProps: {
      Component: IconAttach
    },
    onClick: onUploadClick,
    buttonText: buttonText
  }), /*#__PURE__*/React.createElement(UploadItems, {
    handleFileClick: handleFileClick,
    onRemove: handleFileRemove,
    files: files,
    withFilePreview: withFilePreview
  })));
};

export { FileUpload };
