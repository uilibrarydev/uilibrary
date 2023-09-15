import {useEffect} from 'react'

const callbackStack: { ref: HTMLElement, callback: () => void}[] = [];

function handleDocumentClick(event: MouseEvent) {
  const { ref, callback } = callbackStack[callbackStack.length - 1];
  if (ref && !ref.contains(event.target)) {
      callbackStack.splice(callbackStack.length - 1, 1);
      callback();
  }
}

export const useOnOutsideClick = (
  ref: HTMLElement | null,
  callback: () => void,
): void => {
  useEffect(() => {
    if(ref){
      callbackStack.push({ ref, callback });

      if (callbackStack.length === 1) {
        document.addEventListener('mousedown', handleDocumentClick);
      }

      return () => {
        if (callbackStack.length === 0) {
          document.removeEventListener('mousedown', handleDocumentClick);
        }
      };
    }
  }, [ref, callback]);
}
