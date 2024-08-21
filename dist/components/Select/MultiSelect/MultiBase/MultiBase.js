import { _ as _extends } from '../../../../extends-a63feb99.js';
import { _ as _slicedToArray } from '../../../../slicedToArray-c937067d.js';
import React, { useState, useCallback, useMemo } from 'react';
import { Divider } from '../../../Divider/Divider.js';
import { Empty } from '../../../Empty/Empty.js';
import { useGetElemSizes } from '../../../../hooks/useGetElemSizes.js';
import 'dayjs';
import '../../../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'classnames';
import { OptionItem } from '../../../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import 'react-dom';
import 'framer-motion';
import { ContentTop } from '../../SharedComponents/ContentTop.js';
import '../../../Input/Input.js';
import { DROPDOWN_MAX_HEIGHT } from '../../constants.js';
import '../../../Text/Text.js';
import '../../../../utils/helpers.js';
import '../../../Image/Image.js';
import '../../../Button/Button.js';
import '../../../../defineProperty-d5787266.js';
import '../../../../typeof-3b51e673.js';
import '../../../../objectWithoutProperties-b86e0c22.js';
import '../../../../helperComponents/Loader/Loader.js';
import '../../../Button/consts.js';
import '../../../../consts/index.js';
import '../../../Checkbox/Checkbox.js';
import '../../../Popover/Popover.js';
import '../../../../hooks/useGetTooltipStyles.js';
import '../../../../hooks/useGetElemPositions.js';
import '../../../../hooks/useGetTooltipPosition.js';
import '../../../Tooltip/types.js';
import '../../../../hooks/useHideOnScroll.js';
import '../../../../hooks/useOnOutsideClick.js';
import '../../../Link/Link.js';
import '../../../SVGIcons/IconInfo.js';
import '../../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../../helperComponents/IconDynamicComponent/constants.js';
import '../../../Avatar/Avatar.js';
import '../../../FileUpload/FileUpload.js';
import '../../../../toConsumableArray-0b5aa713.js';
import '../../../FileUpload/types.js';
import '../../../../helperComponents/Label/Label.js';
import '../../../FileUpload/UploadItems.js';
import '../../../../hooks/useFormProps.js';
import '../../../../context/types.js';
import '../../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../SVGIcons/IconDelete.js';
import '../../../SVGIcons/IconEditFilled.js';
import '../../../SVGIcons/IconEdit.js';
import '../../../SVGIcons/IconAttach.js';
import '../../../Tooltip/Tooltip.js';
import '../../../SVGIcons/IconCheckmark.js';
import '../../SharedComponents/Actions.js';
import '../../../Menu/Menu.js';
import '../../../SVGIcons/IconMore.js';
import '../../../SVGIcons/IconDismissFilled.js';
import '../../../SVGIcons/IconSearchFilled.js';
import '../../../SVGIcons/IconSelectAllOff.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../SVGIcons/IconCheckmarkCircleFilled.js';

var MultiBase = function MultiBase(props) {
  var avatar = props.avatar,
    scrollableContentStyle = props.scrollableContentStyle,
    options = props.options,
    helperText = props.helperText,
    translations = props.translations,
    onItemSelect = props.onItemSelect,
    onItemDeselect = props.onItemDeselect,
    isSearchAvailable = props.isSearchAvailable,
    setSelectedValues = props.setSelectedValues,
    selectedValues = props.selectedValues,
    labelLeftIconProps = props.labelLeftIconProps,
    labelRightIconComponent = props.labelRightIconComponent,
    optionRightIconComponent = props.optionRightIconComponent,
    maxSelectCount = props.maxSelectCount,
    menuOptions = props.menuOptions,
    dataIdPrefix = props.dataIdPrefix;
  var emptyListMainMessage = translations.emptyListMainMessage,
    emptyListSecondaryMessage = translations.emptyListSecondaryMessage;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    contentContainerRef = _useState2[0],
    setContentContainerRef = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAllSelected = _useState6[0],
    setAllSelected = _useState6[1];
  var _useGetElemSizes = useGetElemSizes(contentContainerRef),
    scrollHeight = _useGetElemSizes.scrollHeight;
  var clearAll = useCallback(function () {
    setAllSelected(false);
    setSelectedValues([]);
  }, []);
  var filteredData = useMemo(function () {
    if (!searchValue) {
      return options;
    }
    return options.filter(function (dataItem) {
      return typeof dataItem.label === 'string' && dataItem.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  }, [searchValue, options]);
  var selectAll = useCallback(function () {
    setAllSelected(true);
    var allValues = filteredData.map(function (item) {
      var value = item.value,
        label = item.label;
      return {
        value: value,
        label: label
      };
    });
    setSelectedValues(allValues);
  }, [filteredData]);
  var onDeselect = function onDeselect(item) {
    setAllSelected(false);
    onItemDeselect(item);
  };
  var checkIsSelected = function checkIsSelected(itemValue) {
    return selectedValues.find(function (item) {
      return item.value === itemValue;
    }) !== undefined;
  };
  var selectedOptions = useMemo(function () {
    return options.filter(function (item) {
      return selectedValues.findIndex(function (s) {
        return s.value === item.value;
      }) !== -1;
    });
  }, [options, selectedValues]);
  var optionProps = useMemo(function () {
    return {
      avatar: avatar,
      isCheckbox: true,
      labelLeftIconProps: labelLeftIconProps,
      optionRightIconComponent: optionRightIconComponent,
      labelRightIconComponent: labelRightIconComponent
    };
  }, [avatar, labelLeftIconProps, optionRightIconComponent, labelRightIconComponent]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ContentTop, {
    dataIdPrefix: dataIdPrefix,
    menuOptions: menuOptions,
    selectAll: selectAll,
    clearAll: clearAll,
    hasLimitation: !!maxSelectCount,
    isAnySelected: selectedValues.length !== 0,
    helperText: helperText,
    isSearchAvailable: isSearchAvailable,
    isSelectAllDisabled: isAllSelected || filteredData.length === 0,
    setSearchValue: setSearchValue,
    searchValue: searchValue,
    translations: translations
  }), /*#__PURE__*/React.createElement("div", {
    ref: setContentContainerRef,
    className: "select__options__scroll scrollbar scrollbar--vertical ".concat(scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''),
    style: scrollableContentStyle
  }, isSearchAvailable && /*#__PURE__*/React.createElement("div", {
    className: "selected-items"
  }, selectedOptions.map(function (item) {
    var isSelected = selectedValues.findIndex(function (s) {
      return s.value === item.value;
    }) !== -1;
    return /*#__PURE__*/React.createElement(OptionItem, _extends({
      data: item,
      key: item.value,
      isSelected: true,
      disabled: item.disabled,
      onClick: isSelected ? onDeselect : onItemSelect
    }, optionProps));
  })), /*#__PURE__*/React.createElement(Divider, {
    type: "primary",
    isHorizontal: true
  }), filteredData.map(function (item, index) {
    var isSelected = checkIsSelected(item.value);
    return /*#__PURE__*/React.createElement(OptionItem, _extends({
      data: item,
      dataId: item.dataId,
      key: "".concat(item.value, "_").concat(index),
      onClick: isSelected ? onDeselect : onItemSelect,
      disabled: item.disabled || !isSelected && selectedValues.length === maxSelectCount,
      isSelected: isSelected
    }, optionProps));
  })), filteredData.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    size: "small",
    mainMessage: emptyListMainMessage,
    paragraphMessage: emptyListSecondaryMessage
  }) : null);
};

export { MultiBase };
