import {TButtonPropTypes} from "../Button/types";

export interface TEmptyProps {
  type?: string
  className?: string
  mainMessage: string
  paragraphMessage?: string
  buttonProps?: TButtonPropTypes
}
