import { useGetElemPositions } from './useGetElemPositions.js';
import { useGetElemSizes } from './useGetElemSizes.js';

var useGetHasTopSpace = function useGetHasTopSpace(_ref) {
  var element = _ref.element,
    input = _ref.input;
  var _useGetElemSizes = useGetElemSizes(element),
    height = _useGetElemSizes.height;
  var _useGetElemPositions = useGetElemPositions(input),
    inputTop = _useGetElemPositions.top;
  return inputTop > height;
};
var useGetHasBottomSpace = function useGetHasBottomSpace(_ref2) {
  var element = _ref2.element,
    input = _ref2.input;
  var _useGetElemSizes2 = useGetElemSizes(element),
    height = _useGetElemSizes2.height;
  var _useGetElemPositions2 = useGetElemPositions(input),
    inputBottom = _useGetElemPositions2.bottom;
  return {
    hasBottomSpace: height < window.innerHeight - inputBottom,
    bottomSpace: window.innerHeight - inputBottom
  };
};

export { useGetHasBottomSpace, useGetHasTopSpace };
