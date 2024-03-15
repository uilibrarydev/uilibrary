import { CUSTOM_SCROLL_MESSAGE, CUSTOM_SCROLL_NAME } from '../consts'

export const useDispatchEventOnScroll = () => {
  const dispatchScrollEvent = () => {
    const closeMenuEvent = new CustomEvent(CUSTOM_SCROLL_NAME, {
      detail: CUSTOM_SCROLL_MESSAGE
    })
    document.dispatchEvent(closeMenuEvent)
  }
  return dispatchScrollEvent
}
