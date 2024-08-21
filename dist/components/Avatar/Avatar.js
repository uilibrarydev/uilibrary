import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { FileUpload } from '../FileUpload/FileUpload.js';
import { FileUploadMode } from '../FileUpload/types.js';
import '../../toConsumableArray-0b5aa713.js';
import '../Button/Button.js';
import '../../extends-a63feb99.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import 'dayjs';
import '../../helperComponents/Loader/Loader.js';
import '../../hooks/useScreenSize.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../Button/consts.js';
import '../../helperComponents/Label/Label.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../FileUpload/UploadItems.js';
import '../../hooks/useFormProps.js';
import '../../context/types.js';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../SVGIcons/IconDelete.js';
import '../SVGIcons/IconEditFilled.js';
import '../SVGIcons/IconEdit.js';
import '../SVGIcons/IconAttach.js';

var Avatar = function Avatar(_ref) {
  var dataId = _ref.dataId,
    id = _ref.id,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'default' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    type = _ref.type,
    _ref$imagePath = _ref.imagePath,
    imagePath = _ref$imagePath === void 0 ? '' : _ref$imagePath,
    _ref$initials = _ref.initials,
    initials = _ref$initials === void 0 ? '' : _ref$initials,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$isEditable = _ref.isEditable,
    isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,
    _ref$allowedTypes = _ref.allowedTypes,
    allowedTypes = _ref$allowedTypes === void 0 ? '.png, .jpg, .jpeg, image/jpeg, image/png, image/jpg' : _ref$allowedTypes,
    onError = _ref.onError,
    fileAllowedSize = _ref.fileAllowedSize,
    onAvatarChange = _ref.onAvatarChange;
  var _useState = useState(imagePath),
    _useState2 = _slicedToArray(_useState, 2),
    image = _useState2[0],
    setImage = _useState2[1];
  var getFiles = function getFiles(files) {
    if (files && files[0]) {
      setImage(URL.createObjectURL(files[0]));
      onAvatarChange === null || onAvatarChange === void 0 || onAvatarChange(files[0]);
    }
  };
  var style = {
    backgroundImage: image ? "url(".concat(image, ")") : 'none'
  };
  useEffect(function () {
    setImage(imagePath);
  }, [imagePath]);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    "data-id": dataId,
    className: classNames("avatar avatar--".concat(color, " avatar--").concat(type, " avatar--").concat(size), className, {
      'avatar--image': image,
      'avatar--edit': isEditable
    }),
    style: style
  }, !image ? initials : null, isEditable && /*#__PURE__*/React.createElement(FileUpload, {
    onError: onError,
    fileAllowedSize: fileAllowedSize,
    multiple: false,
    withFilePreview: false,
    getFiles: getFiles,
    allowedTypes: allowedTypes,
    mode: FileUploadMode.edit
  }));
};

export { Avatar };
