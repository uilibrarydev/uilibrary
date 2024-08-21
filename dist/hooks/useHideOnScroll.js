import { useEffect } from 'react';
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE } from '../consts/index.js';

var useHideOnScroll = function useHideOnScroll(hide) {
  useEffect(function () {
    document.addEventListener('scroll', hide);
    return function () {
      document.removeEventListener('scroll', hide);
    };
  }, []);
  useEffect(function () {
    document.addEventListener(CUSTOM_SCROLL_NAME, function (event) {
      var customEvent = event;
      // Check the event type
      if (customEvent.detail === CUSTOM_SCROLL_MESSAGE) {
        // Close the menu
        hide();
      }
    });
  }, []);
  return null;
};

export { useHideOnScroll };
