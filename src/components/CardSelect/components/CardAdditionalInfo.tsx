import { Divider } from '../../Divider'
import { Text } from '../../Text'
import type { ReactElement } from 'react'
import React from 'react'
import type { TInfoList } from '../types'

interface TCardAdditionalInfo {
  additionalInfo?: TInfoList
  disabled?: boolean
}
export const CardAdditionalInfo = (props: TCardAdditionalInfo): ReactElement | null => {
  const { additionalInfo, disabled } = props
  return additionalInfo?.length ? (
    <>
      <Divider type={'primary'} isHorizontal={true} className={'mt-16 mb-16'} />
      <div className="card-select__list">
        {additionalInfo.map(({ key, value, id }) => {
          return (
            <div
              key={id}
              className="card-select__list__item flexbox justify-content--between mt-12"
            >
              <Text type={disabled ? 'disabled' : 'secondary'} size={'small'} className={'pr-16'}>
                {key}
              </Text>
              <Text type={disabled ? 'disabled' : 'primary'} weight={'semibold'}>
                {value}
              </Text>
            </div>
          )
        })}
      </div>
    </>
  ) : null
}
