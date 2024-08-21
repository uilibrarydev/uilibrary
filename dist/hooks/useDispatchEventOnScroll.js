import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE } from '../consts/index.js';

var useDispatchEventOnScroll = function useDispatchEventOnScroll() {
  return function () {
    var closeMenuEvent = new CustomEvent(CUSTOM_SCROLL_NAME, {
      detail: CUSTOM_SCROLL_MESSAGE
    });
    document.dispatchEvent(closeMenuEvent);
  };
};

export { useDispatchEventOnScroll };
