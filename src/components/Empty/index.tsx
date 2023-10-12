import React from 'react'
import Text from '../Text'
import Image from '../Image'
import Button from '../Button'
import { TEmptyProps } from './types'
import './index.scss'
import classNames from 'classnames'
import noResultImage from '../../assets/images/no-result.svg'

const Empty = (props: TEmptyProps): JSX.Element => {
  const { size = 'large', mainMessage, paragraphMessage, buttonProps, className } = props

  return (
    <div
      className={classNames(
        `no-result ${size == 'large' ? 'no-result--large' : 'no-result--small'}`,
        className
      )}
    >
      <div className="no-result__icon">
        <Image imagePath={noResultImage} />
      </div>
      <div className="no-result__content">
        <Text size={size == 'large' ? 'large' : 'small'} weight="bold">
          {mainMessage}
        </Text>
        {paragraphMessage ? (
          <Text size={size == 'large' ? 'small' : 'xsmall'}>{paragraphMessage}</Text>
        ) : null}
        {buttonProps ? <Button {...buttonProps} size="medium" className="mt-4" /> : null}
      </div>
    </div>
  )
}
export default Empty
