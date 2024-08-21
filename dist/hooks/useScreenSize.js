import { _ as _slicedToArray } from '../slicedToArray-c937067d.js';
import { useState, useEffect } from 'react';
import { SCREEN_SIZES } from '../consts/index.js';

var SMALL = SCREEN_SIZES.SMALL,
  MEDIUM = SCREEN_SIZES.MEDIUM;
var useScreenSize = function useScreenSize() {
  var _useState = useState(getScreenSize),
    _useState2 = _slicedToArray(_useState, 2),
    screenSize = _useState2[0],
    setScreenSize = _useState2[1];
  function getScreenSize() {
    var width = window.innerWidth;
    switch (true) {
      case width <= SMALL:
        return 'small';
      case width <= MEDIUM:
        return 'medium';
      default:
        return 'large';
    }
  }
  var handleResize = function handleResize() {
    setScreenSize(getScreenSize());
  };
  useEffect(function () {
    window.addEventListener('resize', handleResize);
    handleResize();
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return screenSize;
};

export { useScreenSize };
