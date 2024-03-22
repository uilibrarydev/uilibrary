import { Divider } from '../../Divider'
import { Text } from '../../Text'
import React, { ReactElement } from 'react'
import { TInfoList } from '../types'

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
        {additionalInfo.map((item) => {
          return (
            <div
              key={item.key}
              className="card-select__list__item flexbox justify-content--between mt-12"
            >
              <Text type={disabled ? 'disabled' : 'secondary'} size={'small'} className={'pr-16'}>
                <>{item.key}</>
              </Text>
              <Text type={disabled ? 'disabled' : 'primary'} weight={'semibold'}>
                <>{item.value}</>
              </Text>
            </div>
          )
        })}
      </div>
    </>
  ) : null
}
