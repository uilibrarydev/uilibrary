import { useEffect } from 'react';
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE, DROPDOWN_AND_INPUT_GAP } from '../consts/index.js';

var useChangePositionsOnScroll = function useChangePositionsOnScroll(parentElement, childElement) {
  var hasBottomSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var positionElement = function positionElement() {
    var elemDimensions = parentElement === null || parentElement === void 0 ? void 0 : parentElement.getBoundingClientRect();
    var childElementDimensions = childElement === null || childElement === void 0 ? void 0 : childElement.getBoundingClientRect();
    if (childElementDimensions && elemDimensions && childElement) {
      if (hasBottomSpace) {
        childElement.style.top = elemDimensions.bottom + 'px';
      } else {
        childElement.style.bottom = window.innerHeight - elemDimensions.top + DROPDOWN_AND_INPUT_GAP + 'px';
      }
    }
  };
  useEffect(function () {
    window.addEventListener('scroll', positionElement);
  }, [positionElement]);
  useEffect(function () {
    document.addEventListener(CUSTOM_SCROLL_NAME, function (event) {
      var customEvent = event;
      // Check the event type
      if (customEvent.detail === CUSTOM_SCROLL_MESSAGE) {
        positionElement();
      }
    });
  }, [positionElement]);
  return null;
};

export { useChangePositionsOnScroll };
