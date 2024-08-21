import { _ as _toConsumableArray } from '../../../toConsumableArray-0b5aa713.js';
import React, { useRef, useMemo, useEffect } from 'react';
import { Text } from '../../Text/Text.js';
import { Input } from '../../Input/Input.js';
import { Actions } from './Actions.js';
import { IconDismissFilled } from '../../SVGIcons/IconDismissFilled.js';
import { IconSearchFilled } from '../../SVGIcons/IconSearchFilled.js';
import { IconSelectAllOff } from '../../SVGIcons/IconSelectAllOff.js';
import '../../../slicedToArray-c937067d.js';
import 'classnames';
import '../../../utils/helpers.js';
import 'dayjs';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../extends-a63feb99.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../helperComponents/Label/Label.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../../hooks/useScreenSize.js';
import '../../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../Menu/Menu.js';
import 'react-dom';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../../hooks/useHideOnScroll.js';
import '../../../hooks/useOnOutsideClick.js';
import '../../../helperComponents/OptionItem/OptionItem.js';
import '../../Checkbox/Checkbox.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../Tooltip/types.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../FileUpload/types.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';
import 'framer-motion';
import '../../SVGIcons/IconMore.js';

var ContentTop = /*#__PURE__*/React.memo(function (props) {
  var clearAll = props.clearAll,
    selectAll = props.selectAll,
    helperText = props.helperText,
    searchValue = props.searchValue,
    translations = props.translations,
    isAnySelected = props.isAnySelected,
    setSearchValue = props.setSearchValue,
    _props$isSearchAvaila = props.isSearchAvailable,
    isSearchAvailable = _props$isSearchAvaila === void 0 ? false : _props$isSearchAvaila,
    _props$hasLimitation = props.hasLimitation,
    hasLimitation = _props$hasLimitation === void 0 ? false : _props$hasLimitation,
    _props$isSelectAllDis = props.isSelectAllDisabled,
    isSelectAllDisabled = _props$isSelectAllDis === void 0 ? false : _props$isSelectAllDis,
    _props$menuOptions = props.menuOptions,
    menuOptions = _props$menuOptions === void 0 ? [] : _props$menuOptions,
    dataIdPrefix = props.dataIdPrefix;
  var inputRef = useRef(null);
  var _ref = translations || {},
    searchInputPlaceHolder = _ref.searchInputPlaceHolder,
    innerLabel = _ref.innerLabel,
    clearAllLabel = _ref.clearAllLabel,
    selectAllLabel = _ref.selectAllLabel;
  var selectActions = useMemo(function () {
    var options = menuOptions;
    if (selectAll && selectAllLabel && !hasLimitation) {
      options = [{
        label: selectAllLabel,
        value: 1,
        handler: selectAll,
        disabled: isSelectAllDisabled,
        iconProps: {
          Component: IconSelectAllOff
        },
        dataId: dataIdPrefix ? "".concat(dataIdPrefix, "-select-all") : ''
      }];
    }
    if (clearAll && clearAllLabel) {
      options = [].concat(_toConsumableArray(options), [{
        label: clearAllLabel,
        value: 2,
        handler: clearAll,
        disabled: !isAnySelected,
        iconProps: {
          Component: IconDismissFilled
        },
        dataId: dataIdPrefix ? "".concat(dataIdPrefix, "-clear-all") : ''
      }]);
    }
    return options;
  }, [menuOptions, selectAllLabel, selectAll, clearAll, clearAllLabel, isSelectAllDisabled, isAnySelected, dataIdPrefix]);
  var onSearch = function onSearch(e) {
    setSearchValue && setSearchValue(e.target.value);
  };
  var removeFilter = function removeFilter() {
    return setSearchValue && setSearchValue('');
  };
  useEffect(function () {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  return /*#__PURE__*/React.createElement("div", {
    className: "content-top"
  }, helperText ? /*#__PURE__*/React.createElement(Text, {
    size: "xsmall",
    type: "secondary",
    className: "content-top__label"
  }, helperText) : null, isSearchAvailable && /*#__PURE__*/React.createElement(Input, {
    ref: inputRef,
    className: "content-top__search",
    size: "small",
    placeholder: searchInputPlaceHolder,
    handleChange: onSearch,
    currentValue: searchValue,
    rightIconProps: {
      Component: searchValue ? IconDismissFilled : IconSearchFilled,
      size: searchValue ? 'xsmall' : 'small',
      onClick: removeFilter
    }
  }), /*#__PURE__*/React.createElement(Actions, {
    selectActions: selectActions,
    innerLabel: innerLabel
  }));
});
ContentTop.displayName = 'ContentTop';

export { ContentTop };
