import React, { useMemo } from 'react';
import 'classnames';
import 'dayjs';
import { OptionItem } from '../../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import '../../../extends-a63feb99.js';
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
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../FileUpload/types.js';
import '../../Button/Button.js';
import '../../../objectWithoutProperties-b86e0c22.js';
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

var FilterDropdownContent = function FilterDropdownContent(props) {
  var checkIsSelected = props.checkIsSelected,
    filterValue = props.filterValue,
    options = props.options,
    onItemSelect = props.onItemSelect,
    onItemDeselect = props.onItemDeselect,
    labelLeftIconProps = props.labelLeftIconProps,
    optionRightIconComponent = props.optionRightIconComponent,
    labelRightIconComponent = props.labelRightIconComponent,
    avatar = props.avatar;
  var filteredOptions = useMemo(function () {
    return options.filter(function (option) {
      return option.label.toString().includes(filterValue);
    });
  }, [filterValue, options]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, filteredOptions.map(function (item) {
    var isSelected = checkIsSelected(item.value);
    return /*#__PURE__*/React.createElement(OptionItem, {
      data: item,
      key: item.value,
      onClick: isSelected ? onItemDeselect : onItemSelect,
      labelLeftIconProps: labelLeftIconProps,
      OptionRightIconComponent: optionRightIconComponent,
      LabelRightIconComponent: labelRightIconComponent,
      avatar: avatar,
      isCheckbox: true,
      disabled: item.disabled,
      isSelected: isSelected
    });
  }));
};

export { FilterDropdownContent };
