import { useEffect } from 'react';

var callbackStack = [];
function handleMouseDownEvent(event) {
  var callbackObject = callbackStack[callbackStack.length - 1];
  if (!callbackObject) {
    return;
  }
  var ref = callbackObject.ref,
    callback = callbackObject.callback,
    shouldRemoveCallback = callbackObject.shouldRemoveCallback;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (ref && !ref.contains(event.target)) {
    if (shouldRemoveCallback) {
      callbackStack.splice(callbackStack.length - 1, 1);
    }
    callback(event);
  }
}
var useOnOutsideClick = function useOnOutsideClick(ref, callback, state, uid) {
  var shouldRemoveCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  useEffect(function () {
    if (ref && state && uid) {
      callbackStack.push({
        ref: ref,
        callback: callback,
        uid: uid,
        shouldRemoveCallback: shouldRemoveCallback
      });
      if (callbackStack.length === 1) {
        document.addEventListener('mousedown', handleMouseDownEvent);
      }
      return function () {
        if (callbackStack.length === 0) {
          document.removeEventListener('mousedown', handleMouseDownEvent);
        }
      };
    }
  }, [ref, state, uid]);
  useEffect(function () {
    if (!state && callbackStack.length > 0) {
      var activeElementIndex = callbackStack.findIndex(function (stack) {
        return stack.uid === uid;
      });
      if (activeElementIndex >= 0) {
        callbackStack.splice(activeElementIndex, 1);
      }
    }
  }, [state]);
};

export { useOnOutsideClick };
