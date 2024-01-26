import {IFormCompProps} from '../../types/types';

export interface TBadgeProps extends IFormCompProps {
  text?: number | string
  type?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  className?: string
}
