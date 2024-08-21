import { _ as _extends } from '../../../extends-a63feb99.js';
import { _ as _objectWithoutProperties } from '../../../objectWithoutProperties-b86e0c22.js';
import React from 'react';
import { FilterDropdownContent } from './FilterDropdown.js';
import 'classnames';
import 'dayjs';
import '../../../helperComponents/OptionItem/OptionItem.js';
import '../../Checkbox/Checkbox.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../Popover/Popover.js';
import '../../../slicedToArray-c937067d.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../Tooltip/types.js';
import '../../../hooks/useHideOnScroll.js';
import '../../../consts/index.js';
import '../../../hooks/useOnOutsideClick.js';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import 'react-syntax-highlighter';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../FileUpload/types.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../../helperComponents/Label/Label.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';

var _excluded = ["options"];
var FilterGroupDropdownContent = function FilterGroupDropdownContent(props) {
  var options = props.options,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, options.map(function (_ref) {
    var data = _ref.data,
      title = _ref.title;
    return /*#__PURE__*/React.createElement("div", {
      className: "group_container",
      key: title
    }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement(FilterDropdownContent, _extends({
      options: data
    }, rest)));
  }));
};

export { FilterGroupDropdownContent };
