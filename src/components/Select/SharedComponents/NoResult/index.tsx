import React from 'react'
import Text from '../../../Text'
import Image from '../../../Image'

type TNoResultProps = {
  mainMessage: string
  paragraphMessage?: string
}

export const NoResult = (props: TNoResultProps): JSX.Element => {
  const { mainMessage, paragraphMessage } = props

  return (
    <div className="no-result">
      <div className="no-result__icon mb-16">
        <Image imagePath="static/media/src/assets/images/no-result.svg" />
      </div>

      <Text size="xsmall" weight="bold">
        {mainMessage}
      </Text>
      {paragraphMessage ? <Text>{paragraphMessage}</Text> : null}
    </div>
  )
}
