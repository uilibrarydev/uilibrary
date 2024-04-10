import React from 'react'
import { TCardSelectGroupProps } from './types'
import { CardSelect } from './CardSelect'

export const CardSelectGroup = (props: TCardSelectGroupProps): JSX.Element => {
  const { cards, name, handleChange, value, cardsGroupType, cardsGroupDisable } = props

  return (
    <div>
      {cards.map(
        (
          {
            type,
            illustration,
            value: cardValue,
            title,
            description,
            chips,
            inputProps,
            additionalInfo,
            id,
            disabled
          },
          index
        ) => (
          <CardSelect
            className={'mb-20'}
            name={name}
            key={id || index}
            type={cardsGroupType || type}
            title={title}
            description={description}
            chips={chips}
            inputProps={inputProps}
            handleChange={handleChange}
            additionalInfo={additionalInfo}
            cardValue={cardValue}
            value={value}
            illustration={illustration}
            disabled={cardsGroupDisable || disabled}
          />
        )
      )}
    </div>
  )
}
