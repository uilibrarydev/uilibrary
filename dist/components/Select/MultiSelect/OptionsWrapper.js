import { _ as _extends } from '../../../extends-a63feb99.js';
import { _ as _toConsumableArray } from '../../../toConsumableArray-0b5aa713.js';
import { _ as _defineProperty } from '../../../defineProperty-d5787266.js';
import { _ as _objectWithoutProperties } from '../../../objectWithoutProperties-b86e0c22.js';
import React, { useRef, useCallback, useMemo } from 'react';
import 'classnames';
import { getStringWidth } from '../../../utils/helpers.js';
import { useGetElemSizes } from '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useScreenSize.js';
import { useGetHasBottomSpace, useGetHasTopSpace } from '../../../hooks/useGetHasBottomSpace.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import 'react-dom';
import 'framer-motion';
import '../SharedComponents/ContentTop.js';
import { Loading } from '../SharedComponents/Loading.js';
import '../../Input/Input.js';
import { MultiSelectGrouped } from './MultiSelectGrouped/MultiSelectGrouped.js';
import { MultiBase } from './MultiBase/MultiBase.js';
import { MultiSelectWithTabs } from './MultiSelectWithTabs/MultiSelectWithTabs.js';
import { TRANSLATIONS_DEFAULT_VALUES, SELECTED_VISIBLE_MIN_COUNT } from '../constants.js';
import '../../../slicedToArray-c937067d.js';
import '../../../typeof-3b51e673.js';
import 'dayjs';
import '../../../consts/index.js';
import '../../../hooks/useGetElemPositions.js';
import '../../Text/Text.js';
import '../SharedComponents/Actions.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../Menu/Menu.js';
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
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../FileUpload/types.js';
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
import '../../SVGIcons/IconMore.js';
import '../../SVGIcons/IconDismissFilled.js';
import '../../SVGIcons/IconSearchFilled.js';
import '../../SVGIcons/IconSelectAllOff.js';
import 'react-input-mask';
import 'react-number-format';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../Divider/Divider.js';
import '../../Empty/Empty.js';
import '../../Image/Image.js';
import '../../SVGIcons/IconCaretDownFilled.js';
import '../../SVGIcons/IconCaretUpFilled.js';
import '../../Tab/Tab.js';
import '../../Tab/TabItem.js';
import '../../Badge/Badge.js';

var _excluded = ["isLoading", "withTabs", "isGrouped", "isOpen", "translations", "containerRef", "options", "selectedValues", "setSelectedValues", "setIsOpen", "dropdownRef"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OptionsWrapper = function OptionsWrapper(props) {
  var isLoading = props.isLoading,
    withTabs = props.withTabs,
    isGrouped = props.isGrouped,
    isOpen = props.isOpen,
    translations = props.translations,
    containerRef = props.containerRef,
    options = props.options,
    selectedValues = props.selectedValues,
    setSelectedValues = props.setSelectedValues,
    setIsOpen = props.setIsOpen,
    dropdownRef = props.dropdownRef,
    rest = _objectWithoutProperties(props, _excluded);
  var _useGetElemSizes = useGetElemSizes(containerRef),
    width = _useGetElemSizes.width;
  var localizations = _objectSpread(_objectSpread({}, TRANSLATIONS_DEFAULT_VALUES), translations);
  var inputRef = useRef(null);
  var SelectComp = withTabs ? MultiSelectWithTabs : isGrouped ? MultiSelectGrouped : MultiBase;
  var checkIsValueOverflowed = useCallback(function (value) {
    var elemWidth = getStringWidth(value, 14);
    return elemWidth > width - 80; // padding and width of (+number)
  }, [width]);
  var toggleDropdown = function toggleDropdown(e) {
    var clickedElement = e === null || e === void 0 ? void 0 : e.target;
    var className = clickedElement === null || clickedElement === void 0 ? void 0 : clickedElement.getAttribute('class');
    if (e && className && (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)) {
      setIsOpen(!isOpen);
      e.preventDefault();
    } else {
      setIsOpen(true);
    }
  };
  var onItemSelect = function onItemSelect(item) {
    setSelectedValues([].concat(_toConsumableArray(selectedValues), [item]));
  };
  var onItemDeselect = function onItemDeselect(item) {
    setSelectedValues(selectedValues.filter(function (optionValue) {
      return optionValue.value !== item.value;
    }));
  };
  var optionsCount = useMemo(function () {
    if (isGrouped || withTabs) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      var typed_options = options;
      return typed_options.reduce(function (acc, option) {
        var data = option.data;
        return acc + data.length;
      }, 0);
    }
    return options.length;
  }, [options]);
  var _useGetHasBottomSpace = useGetHasBottomSpace({
      element: dropdownRef,
      input: inputRef.current
    }),
    hasBottomSpace = _useGetHasBottomSpace.hasBottomSpace,
    bottomSpace = _useGetHasBottomSpace.bottomSpace;
  var hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current
  });
  if (isLoading) {
    return /*#__PURE__*/React.createElement(Loading, null);
  }
  return /*#__PURE__*/React.createElement(SelectComp
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  , _extends({
    options: options,
    isOpen: isOpen,
    hasBottomSpace: hasBottomSpace,
    translations: localizations,
    selectedValues: selectedValues,
    onItemSelect: onItemSelect,
    onItemDeselect: onItemDeselect,
    toggleDropdown: toggleDropdown,
    setSelectedValues: setSelectedValues,
    checkIsValueOverflowed: checkIsValueOverflowed,
    isSearchAvailable: optionsCount > SELECTED_VISIBLE_MIN_COUNT,
    scrollableContentStyle: _objectSpread({}, !hasBottomSpace && !hasTopSpace ? {
      maxHeight: bottomSpace - 65 - 56
    } : {}) // 65 - height of the top content, 56 - height of the footer
  }, rest));
};

export { OptionsWrapper };
