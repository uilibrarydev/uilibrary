import React from 'react'
import Text from '../Text'
import Image from '../Image'
import Button from '../Button'
import { TEmptyProps } from './types'
import './index.scss'
import classNames from 'classnames'

const Empty = (props: TEmptyProps): JSX.Element => {
  const { type = 'large', mainMessage, paragraphMessage, buttonText } = props

  return (
    <div
      className={classNames(
        `no-result ${type == 'large' ? 'no-result--large' : 'no-result--small'}, className`
      )}
    >
      <div className="no-result__icon mb-8">
        <Image imagePath="static/media/src/assets/images/no-result.svg" />
      </div>
      <Text size={type == 'large' ? 'large' : 'small'} weight="bold">
        {mainMessage}
      </Text>
      {paragraphMessage ? (
        <Text size={type == 'large' ? 'small' : 'xsmall'}>{paragraphMessage}</Text>
      ) : null}
      {buttonText ? <Button buttonText={buttonText} size="medium" className="mt-4" /> : null}
    </div>
  )
}
export default Empty
