import React, { ReactElement } from 'react'
import { TCardItemProps } from './types'
import { Text } from '../Text'
export const CardItem = (props: TCardItemProps): ReactElement => {
  const { title, icon, subtitleProps, children } = props
  return (
    <div
      style = {{
      border:'1px solid lightgrey',
        borderRadius:'24px'
    }}
      className={'flexbox cursor-pointer mb-20 justify-content--between p-12 align-items--center'}

    >
      <div className={'flexbox'}>
        <div className={'mr-12'}>
          {icon && icon.Component ? <icon.Component {...icon} /> : null}
        </div>
        <div>
          <Text>{title}</Text>
          <div className={'flexbox align-items--center'}>
            <Text className={'mr-12'}>{subtitleProps?.subtitle} </Text>
            {subtitleProps?.iconProps && subtitleProps.iconProps.Component ? (
              <subtitleProps.iconProps.Component {...icon} />
            ) : null}
          </div>
        </div>
      </div>
      <div>{children ? children : null}</div>
    </div>
  )
}
