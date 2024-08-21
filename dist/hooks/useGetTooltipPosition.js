import { useMemo } from 'react';
import { useGetElemPositions } from './useGetElemPositions.js';
import { useGetElemSizes } from './useGetElemSizes.js';

var GAP = 20;
var ARROW_DISTANCE = 20;
var useGetTooltipPosition = function useGetTooltipPosition(info) {
  var initialPosition = info.initialPosition,
    elemRef = info.elemRef,
    tooltipRef = info.tooltipRef,
    _info$hasTriangle = info.hasTriangle,
    hasTriangle = _info$hasTriangle === void 0 ? true : _info$hasTriangle;
  var _useGetElemPositions = useGetElemPositions(elemRef),
    left = _useGetElemPositions.left,
    top = _useGetElemPositions.top,
    bottom = _useGetElemPositions.bottom;
  var _useGetElemSizes = useGetElemSizes(tooltipRef),
    tooltipWidth = _useGetElemSizes.width,
    tooltipHeight = _useGetElemSizes.height;
  var _useGetElemSizes2 = useGetElemSizes(elemRef),
    itemWidth = _useGetElemSizes2.width;

  // this is calculations for tooltip top/left/bottom/right positions
  var calculatedPosition = useMemo(function () {
    var hasTopSpace = tooltipHeight + GAP < top;
    var hasBottomSpace = tooltipHeight + GAP < window.innerHeight - bottom;
    var hasLeftSpace = tooltipWidth + GAP < left;
    var hasRightSpace = tooltipWidth + GAP < window.innerWidth - left;
    var hasMiddleRightSpace = tooltipWidth + GAP < window.innerWidth - left - itemWidth;
    if (!hasBottomSpace && !hasRightSpace && initialPosition.includes('bottom-right')) {
      return initialPosition.replace('bottom-right', 'top-left');
    }
    if (!hasTopSpace && initialPosition.includes('top')) {
      return initialPosition.replace('top', 'bottom');
    }
    if (!hasBottomSpace && initialPosition.includes('bottom')) {
      return initialPosition.replace('bottom', 'top');
    }
    if (!hasLeftSpace && initialPosition.includes('left')) {
      return initialPosition.replace('left', 'right');
    }
    if (!hasRightSpace && initialPosition.includes('right')) {
      return initialPosition.replace('right', 'left');
    }
    if (!hasMiddleRightSpace && initialPosition.includes('middle-right')) {
      return initialPosition.replace('right', 'left');
    }
    return initialPosition;
  }, [tooltipHeight, tooltipWidth, bottom, initialPosition]);

  // this is calculations for triangle position
  var finalPosition = useMemo(function () {
    var hasLeftSpace = tooltipWidth < left + ARROW_DISTANCE + GAP;
    var hasRightSpace = tooltipWidth + GAP < window.innerWidth - left;

    // in case of middle position we don't need to change triangle position
    if (calculatedPosition.includes('middle')) {
      return calculatedPosition;
    }
    if (calculatedPosition.includes('right') && !hasLeftSpace) {
      return calculatedPosition.replace('right', 'left');
    }
    if (calculatedPosition.includes('left') && !hasRightSpace) {
      return calculatedPosition.replace('left', 'right');
    }
    if (calculatedPosition.includes('center')) {
      var hasLeftHalfSpace = tooltipWidth / 2 < left + ARROW_DISTANCE + GAP;
      var hasRightHalfSpace = tooltipWidth / 2 + GAP < window.innerWidth - left;
      if (!hasLeftHalfSpace) {
        return calculatedPosition.replace('center', 'left');
      }
      if (!hasRightHalfSpace) {
        return calculatedPosition.replace('center', 'right');
      }
      return calculatedPosition;
    }
    return calculatedPosition;
  }, [calculatedPosition, tooltipWidth, itemWidth, left]);
  if (!hasTriangle) {
    return calculatedPosition;
  }
  return finalPosition;
};

export { useGetTooltipPosition };
