import React from 'react';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { Avatar } from './Avatar.js';
import { Positions } from '../Tooltip/types.js';
import 'dayjs';
import { useScreenSize } from '../../hooks/useScreenSize.js';
import 'react-hook-form';
import classNames from 'classnames';
import { IconAdd } from '../SVGIcons/IconAdd.js';
import '../../slicedToArray-c937067d.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../../hooks/useGetTooltipStyles.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../../hooks/useHideOnScroll.js';
import '../../consts/index.js';
import '../FileUpload/FileUpload.js';
import '../../toConsumableArray-0b5aa713.js';
import '../FileUpload/types.js';
import '../Button/Button.js';
import '../../extends-a63feb99.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import 'react-syntax-highlighter';
import '../Button/consts.js';
import '../../helperComponents/Label/Label.js';
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

var VISIBLE_AVATARS_AMOUNT = {
  small: 2,
  medium: 4,
  large: 6
};
var AvatarGroup = function AvatarGroup(_ref) {
  var _ref$avatarGroup = _ref.avatarGroup,
    avatarGroup = _ref$avatarGroup === void 0 ? [] : _ref$avatarGroup,
    onAddUser = _ref.onAddUser,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$maxCount = _ref.maxCount,
    maxCount = _ref$maxCount === void 0 ? 0 : _ref$maxCount,
    dataId = _ref.dataId;
  var screenSize = useScreenSize();
  var visibleAvatarsAmount = maxCount || VISIBLE_AVATARS_AMOUNT[screenSize];
  var visibleAvatars = avatarGroup.slice(0, visibleAvatarsAmount);
  var invisibleAvatarsAmount = avatarGroup.length - visibleAvatarsAmount > 0 ? avatarGroup.length - visibleAvatarsAmount : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("avatar-group avatar-group--".concat(size))
  }, visibleAvatars.map(function (avatar, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'avatar-group__item',
      key: index
    }, avatar.tooltipContent ? /*#__PURE__*/React.createElement(Tooltip, {
      text: avatar.tooltipContent,
      id: "".concat(index),
      position: Positions.TOP_CENTER
    }) : null, /*#__PURE__*/React.createElement(Avatar, {
      dataId: dataId,
      id: "".concat(index),
      size: size,
      initials: avatar.initials,
      imagePath: avatar.imagePath
    }));
  }), invisibleAvatarsAmount ? /*#__PURE__*/React.createElement("div", {
    className: "avatar-group__item"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    text: 'Name Surname',
    id: 'amountTooltip',
    position: Positions.TOP_CENTER
  }), /*#__PURE__*/React.createElement(Avatar, {
    type: 'count',
    size: size,
    id: 'amountTooltip',
    initials: "+".concat(invisibleAvatarsAmount)
  })) : null, onAddUser ? /*#__PURE__*/React.createElement("div", {
    className: classNames("avatar avatar-group__add avatar--".concat(size)),
    onClick: onAddUser
  }, /*#__PURE__*/React.createElement(IconAdd, {
    type: "disabled",
    size: size
  })) : null);
};

export { AvatarGroup };
