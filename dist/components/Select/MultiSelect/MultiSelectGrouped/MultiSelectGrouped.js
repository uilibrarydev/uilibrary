import { _ as _extends } from '../../../../extends-a63feb99.js';
import { _ as _toConsumableArray } from '../../../../toConsumableArray-0b5aa713.js';
import { _ as _slicedToArray } from '../../../../slicedToArray-c937067d.js';
import React, { useState, useMemo, useCallback } from 'react';
import { Text } from '../../../Text/Text.js';
import { Divider } from '../../../Divider/Divider.js';
import { Empty } from '../../../Empty/Empty.js';
import { useGetElemSizes } from '../../../../hooks/useGetElemSizes.js';
import 'dayjs';
import '../../../../hooks/useScreenSize.js';
import 'react-hook-form';
import { OptionItem } from '../../../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import 'classnames';
import 'react-dom';
import 'framer-motion';
import { ContentTop } from '../../SharedComponents/ContentTop.js';
import '../../../Input/Input.js';
import { IconCaretDownFilled } from '../../../SVGIcons/IconCaretDownFilled.js';
import { IconCaretUpFilled } from '../../../SVGIcons/IconCaretUpFilled.js';
import { DROPDOWN_MAX_HEIGHT } from '../../constants.js';
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

var MultiSelectGrouped = function MultiSelectGrouped(props) {
  var avatar = props.avatar,
    options = props.options,
    helperText = props.helperText,
    translations = props.translations,
    selectedValues = props.selectedValues,
    onItemSelect = props.onItemSelect,
    onItemDeselect = props.onItemDeselect,
    setSelectedValues = props.setSelectedValues,
    isSearchAvailable = props.isSearchAvailable,
    labelLeftIconProps = props.labelLeftIconProps,
    scrollableContentStyle = props.scrollableContentStyle,
    optionRightIconComponent = props.optionRightIconComponent,
    labelRightIconComponent = props.labelRightIconComponent,
    maxSelectCount = props.maxSelectCount,
    menuOptions = props.menuOptions,
    dataIdPrefix = props.dataIdPrefix;
  var emptyListMainMessage = translations.emptyListMainMessage,
    emptyListSecondaryMessage = translations.emptyListSecondaryMessage;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    activeGroupId = _useState4[0],
    setActiveGroupId = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAllSelected = _useState6[0],
    setAllSelected = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    contentContainerRef = _useState8[0],
    setContentContainerRef = _useState8[1];
  var _useGetElemSizes = useGetElemSizes(contentContainerRef),
    scrollHeight = _useGetElemSizes.scrollHeight;
  var filteredData = useMemo(function () {
    if (!searchValue) {
      return options;
    }
    return options.reduce(function (acc, group) {
      var data = group.data,
        title = group.title;
      var groupData = data.filter(function (dataItem) {
        return typeof dataItem.label === 'string' && dataItem.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });
      if (groupData.length) {
        return [].concat(_toConsumableArray(acc), [{
          title: title,
          data: groupData
        }]);
      }
      return acc;
    }, []);
  }, [searchValue, options]);
  var clearAll = useCallback(function () {
    setAllSelected(false);
    setSelectedValues([]);
  }, []);
  var selectAll = useCallback(function () {
    setAllSelected(true);
    var allValues = filteredData.reduce(function (acc, _ref) {
      var data = _ref.data;
      return [].concat(_toConsumableArray(acc), _toConsumableArray(data.map(function (item) {
        return {
          value: item.value,
          label: item.label
        };
      })));
    }, []);
    setSelectedValues(allValues);
  }, [filteredData]);
  var selectedOptions = useMemo(function () {
    return options.reduce(function (acc, option) {
      var data = option.data;
      var selectedItems = data.filter(function (item) {
        return selectedValues.findIndex(function (s) {
          return s.value === item.value;
        }) !== -1;
      });
      return [].concat(_toConsumableArray(acc), _toConsumableArray(selectedItems));
    }, []);
  }, [options, selectedValues]);
  var onDeselect = function onDeselect(item) {
    setAllSelected(false);
    onItemDeselect(item);
  };
  var onGroupClick = function onGroupClick(index) {
    if (activeGroupId == index) {
      setActiveGroupId(null);
      return;
    }
    setActiveGroupId(index);
  };
  var optionProps = useMemo(function () {
    return {
      isCheckbox: true,
      avatar: avatar,
      labelLeftIconProps: labelLeftIconProps,
      optionRightIconComponent: optionRightIconComponent,
      labelRightIconComponent: labelRightIconComponent,
      className: 'group-item__option'
    };
  }, [avatar, labelLeftIconProps, optionRightIconComponent, labelRightIconComponent]);
  var hasTopContent = isSearchAvailable || helperText;
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasTopContent ? /*#__PURE__*/React.createElement(ContentTop, {
    dataIdPrefix: dataIdPrefix,
    menuOptions: menuOptions,
    isSearchAvailable: isSearchAvailable,
    hasLimitation: !!maxSelectCount,
    selectAll: selectAll,
    clearAll: clearAll,
    isAnySelected: selectedValues.length !== 0,
    helperText: helperText,
    isSelectAllDisabled: isAllSelected || filteredData.length === 0,
    setSearchValue: setSearchValue,
    searchValue: searchValue,
    translations: translations
  }) : null, /*#__PURE__*/React.createElement("div", {
    ref: setContentContainerRef,
    className: "select__options__scroll scrollbar scrollbar--vertical ".concat(scrollHeight > DROPDOWN_MAX_HEIGHT ? 'mr-6' : ''),
    style: scrollableContentStyle
  }, /*#__PURE__*/React.createElement("div", null, isSearchAvailable && /*#__PURE__*/React.createElement("div", {
    className: "selected-items"
  }, selectedOptions.map(function (selectedItem) {
    return /*#__PURE__*/React.createElement(OptionItem, _extends({
      isSelected: true,
      data: selectedItem,
      key: selectedItem.value,
      onClick: onDeselect,
      disabled: selectedItem.disabled
    }, optionProps));
  })), hasTopContent ? /*#__PURE__*/React.createElement(Divider, {
    type: "primary",
    isHorizontal: true
  }) : null, filteredData.map(function (_ref2, index) {
    var _data$;
    var title = _ref2.title,
      data = _ref2.data;
    var isActive = index === activeGroupId;
    return /*#__PURE__*/React.createElement("div", {
      className: "select__group group-item",
      key: "".concat((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.value, "_").concat(index)
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return onGroupClick(index);
      },
      className: "group-item__top"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "xxsmall",
      type: "tertiary",
      className: "group-item__title pr-4"
    }, title), isActive ? /*#__PURE__*/React.createElement(IconCaretUpFilled, {
      size: "xxsmall",
      className: "group-item__icon"
    }) : /*#__PURE__*/React.createElement(IconCaretDownFilled, {
      size: "xxsmall",
      className: "group-item__icon"
    })), isActive && data.map(function (item) {
      var isSelected = selectedValues.findIndex(function (s) {
        return s.value === item.value;
      }) !== -1;
      return /*#__PURE__*/React.createElement(OptionItem, _extends({
        data: item,
        dataId: item.dataId,
        key: item.value,
        isSelected: isSelected,
        disabled: item.disabled || !isSelected && selectedValues.length === maxSelectCount,
        onClick: isSelected ? onDeselect : onItemSelect
      }, optionProps));
    }));
  }))), filteredData.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    size: "small",
    mainMessage: emptyListMainMessage,
    paragraphMessage: emptyListSecondaryMessage
  }) : null);
};

export { MultiSelectGrouped };
