import React from 'react'
import Text from '../../../Text'
import Image from '../../../Image'

type TNoResultProps = {
  textResult?: string
}

export const NoResult = (props: TNoResultProps): JSX.Element => {
  const { textResult = "Sorry, we couldn't find any results" } = props
  return (
    <div className="no-result">
      <div className="no-result__icon mb-16">
        <Image imagePath="static/media/src/assets/images/no-result.svg" />
      </div>
      <Text size="xsmall" weight="bold">
        {textResult}
      </Text>
    </div>
  )
}
